module App.Page.Contact ( component ) where

import Prelude

import Halogen as H
import Halogen.HTML as HH
import Halogen.HTML.Properties as HP
import App.Data.Route
import Routing.Duplex (print)
import Halogen.HTML.Events as HE
import Data.Maybe
import Web.Event.Internal.Types
import Effect.Class (liftEffect)
import Web.Event.Event
import Web.UIEvent.MouseEvent
import Data.Either
import Effect.Aff (try)
import Affjax.Web as AX
import Affjax.ResponseFormat as AX
import Affjax.RequestBody as AXB
import Data.FormURLEncoded as AXD
import Data.Tuple
import Data.String.CodePoints

import Effect.Console


type State = { email :: Maybe String, content :: Maybe String, err :: Boolean, isOk :: Boolean }

data Action = Email String | Content String | Submit Event

component =
  H.mkComponent
    { initialState: const { email: Nothing, content: Nothing, err: false, isOk: false }
    , render: render
    , eval: H.mkEval H.defaultEval { handleAction = handleAction }
    }
  where
    handleAction (Email email) = H.modify_ \s -> s { email = pure email }
    handleAction (Content body) = H.modify_ \s -> s { content = pure body }
    handleAction (Submit ev) = do
      liftEffect $ preventDefault ev
      { email, content, err } <- H.get
      let validate Nothing (Just _) = Nothing
          validate (Just _) Nothing =  Nothing
          validate Nothing Nothing = Nothing
          validate (Just x) (Just y) 
            | length x == 0 || length y == 0 = Nothing
            | otherwise = Just $ Tuple x y
      case validate email content of 
        Just (Tuple email content) -> do 
          let url = "https://api.telegram.org/bot2096396660:AAFgPJkIGmBOgbWuzvyejPJJo7-HpFgr2CY/sendMessage"
          let body =
                AXB.FormURLEncoded $
                  AXD.FormURLEncoded
                    [ Tuple "chat_id" (pure "-976591093")
                    , Tuple "text" (pure ("`" <> "from: " <> email <> ", body: " <> content <> "`"))
                    , Tuple "parse_mode" (pure "markdown")
                    ]
          res <- H.liftAff $ try $ AX.post AX.json url (pure body)
          case res of 
            Right _ -> H.modify_ \s -> s { isOk = true }
            Left _ -> H.modify_ \s -> s { err = false }
        Nothing -> H.modify_ \s -> s { err = true }
  
mkClass = HP.class_ <<< HH.ClassName

safeHref = HP.href <<< append "#" <<< print routeCodec

render { isOk: true } =
 HH.div_ 
  [
    HH.nav [mkClass "nav nav--border-top"] 
    [
      HH.span [mkClass "nav__logo"] [HH.a [mkClass "link--background-grey", safeHref Home] [HH.text "Sergey Yakovlev"]]
    ]
  , HH.div [mkClass "content withMargin"] [ HH.text "thank you!!"]
  ]
render { email, content, err } = 
  HH.div_ 
  [
    HH.nav [mkClass "nav nav--border-top"] 
    [
      HH.span [mkClass "nav__logo"] [HH.a [mkClass "link--background-grey", safeHref Home] [HH.text "Sergey Yakovlev"]]
    ]
  , HH.div [mkClass "content withMargin"] 
    [ HH.h1_ [HH.text "let's get in touch"]
    , HH.form [] 
        [ HH.fieldset_
         [
          HH.div [mkClass "form-group"] 
          [ HH.input  
            [ HP.placeholder "Email"
              , HP.type_ HP.InputEmail 
              , mkClass (if (isNothing email || (isJust email && map length email == Just 0)) && err then "form-control is-invalid" else "form-control")
              , HE.onValueInput Email
            ]
          ] 
          , HH.div [mkClass "form-group"] 
            [ HH.textarea
             [  mkClass (if (isNothing content || (isJust content && map length content == Just 0)) && err then "form-control is-invalid" else "form-control")
             , HP.rows 20
             , HE.onValueInput Content
             ]
            ]
          , HH.div [mkClass "form-group"]  
            [ HH.input 
              [ HP.type_ HP.InputSubmit
              , HP.value "Submit" 
              , mkClass "form-control"
              , HE.onClick $ Submit <<< toEvent
              ]
            ]
          ]
        ]
    ]
  ]
