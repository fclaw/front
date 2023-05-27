module App.Page.Login
  ( Intake(..)
  , component
  )
  where

import Prelude

import App.Component.HTML.Utils (css)
import App.Data.Email
import App.Capability.Navigate
import App.Data.Route
import App.Capability.LogMessages

import Halogen as H
import Halogen.HTML as HH
import Halogen.HTML.Events as HE
import App.Component.Form.Field (textInput)
import Halogen.HTML.Properties as HP
import Data.Maybe
import Halogen.Store.Monad (getStore)
import Store
import App.Data.Config
import App.Api.Utils
import App.Api.Endpoints 
       ( mkUserApi
       , constructBasicCredentials
       , apiUserLoginBasicGet
       , BasicCredentials
       , getCredentialsBasicAuth
       )
import Data.Function.Uncurried (runFn2, runFn1)
import Foreign (unsafeToForeign)
import Foreign.Object (singleton, insert)
import Foreign.Object (Object, keys)
import Data.Either
import Data.String (length)
import Store (writeToken, Token (..))
import Effect.Aff.Class (class MonadAff)
import Halogen.Store.Monad (class MonadStore)
import Effect.Class (class MonadEffect)

import Effect.Class.Console

data Action = Submit | UpdateEmail String | UpdatedPassword String

type State = { email :: Maybe String, password :: Maybe String, redirect :: Intake }

newtype Intake = Intake { redirect :: Boolean }

type Tpl = { fst :: String, snd :: String }

initState :: Intake -> State
initState x = { email: Nothing, password: Nothing,  redirect: x }

component = H.mkComponent
    { initialState: initState
    , render
    , eval: H.mkEval H.defaultEval { handleAction = handleAction }
    }
  where
  handleAction Submit = do
    { config: { url } } <- getStore
    { email, password, redirect: Intake { redirect } } <- H.get
    let mkTpl = do  
          fst <- email
          snd <- password
          pure { fst: fst, snd: snd }
    case mkTpl of
      Just { fst, snd } ->  
        do cred <- H.liftEffect $ runFn2 constructBasicCredentials fst snd
           res <- makeRequest url Nothing mkUserApi $ runFn2 apiUserLoginBasicGet cred
           case res of 
             Right cred -> do 
               let token = runFn1 getCredentialsBasicAuth cred
               H.liftEffect $ writeToken (Token token)
               when redirect ( navigate Home )
             Left e -> logDebug $ show e
      _ -> 
        do logShow "validation error"
           logDebug "validation error"
  handleAction (UpdateEmail value) = H.modify_ \s -> s { email = if length value /= 0 then pure value else Nothing }
  handleAction (UpdatedPassword value) = H.modify_ \s -> s { password = if length value /= 0 then pure value else Nothing }
  render _ = 
    HH.div_
    [ HH.div [css "logo"] []
    , HH.div [css "login-block"] 
      [ HH.h1 [] [HH.text "login"]
      , HH.form [] 
        [ HH.fieldset_
          [ HH.input  
            [ HP.placeholder "Email"
            , HP.type_ HP.InputEmail 
            , HE.onValueInput UpdateEmail ]
          , HH.input 
            [ HP.placeholder "Password"
            , HP.type_ HP.InputPassword 
            , HE.onValueInput UpdatedPassword
            ]
          , HH.input 
            [ HP.type_ HP.InputSubmit
            , HP.value "Sign in" 
            , HE.onClick \_ -> Submit
            ]
          ]
        ]
      ]
    ]