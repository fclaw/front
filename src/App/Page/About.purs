module App.Page.About ( component ) where

import Prelude

import Halogen as H
import Halogen.HTML as HH
import Halogen.HTML.Properties as HP
import App.Data.Route
import Routing.Duplex (print)

component =
  H.mkComponent
    { initialState: identity
    , render: const render
    , eval: H.mkEval H.defaultEval
    }
  
mkClass = HP.class_ <<< HH.ClassName

safeHref = HP.href <<< append "#" <<< print routeCodec

render = 
  HH.div_ 
  [
    HH.nav [mkClass "nav nav--border-top"] 
    [
      HH.span [mkClass "nav__logo"] [HH.a [mkClass "link--background-grey", safeHref Home] [HH.text "Sergey Yakovlev"]]
    ]
  , HH.div [mkClass "content withMargin"] [ HH.text "about"]
  ]

