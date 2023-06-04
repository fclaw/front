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

import Undefined

-- -976591093

-- let url_msg = telegramHost <> telegramBot <> "/sendMessage"
--         let
--           body =
--             AXB.FormURLEncoded $
--               AXD.FormURLEncoded
--                 [ Tuple "chat_id" (pure telegramChat)
--                 , Tuple "text" (pure ("`" <> message log <> "`"))
--                 , Tuple "parse_mode" (pure "markdown")
--                 ]
--         catchError 
--           (do void $ H.liftAff $ AX.post AX.json url_msg (pure body)


type State = { email :: Maybe String, content :: Maybe String, err :: Boolean }

data Action = Email String | Content String | Submit Event

component =
  H.mkComponent
    { initialState: const { email: Nothing, content: Nothing, err: false }
    , render: render
    , eval: H.mkEval H.defaultEval { handleAction = handleAction }
    }
  where
    handleAction (Email email) = H.modify_ \s -> s { email = pure email }
    handleAction (Content body) = H.modify_ \s -> s { content = pure body }
    handleAction (Submit ev) = do
      liftEffect $ preventDefault ev
      { email, content } <- H.get
      let url = "https://api.telegram.org/bot2096396660:AAFgPJkIGmBOgbWuzvyejPJJo7-HpFgr2CY/sendMessage"
      let body =
            AXB.FormURLEncoded $
              AXD.FormURLEncoded
                [ Tuple "chat_id" (pure "-976591093")
                , Tuple "text" (pure ("`" <> "from: " <> fromMaybe mempty email <> ", body: " <> fromMaybe mempty content <> "`"))
                , Tuple "parse_mode" (pure "markdown")
                ]
      void $ H.liftAff $ AX.post AX.json url (pure body)
  
mkClass = HP.class_ <<< HH.ClassName

safeHref = HP.href <<< append "#" <<< print routeCodec

render _ = 
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
              , mkClass "form-control"
              , HE.onValueInput Email
            ]
          ] 
          , HH.div [mkClass "form-group"] 
            [ HH.textarea
             [  mkClass "form-control"
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
