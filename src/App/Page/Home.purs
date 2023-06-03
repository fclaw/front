module App.Page.Home ( component ) where

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
  HH.div [mkClass "home"] 
  [ HH.h1 [mkClass "home__title"] [HH.text "Sergey Yakovlev"]
  , HH.p [mkClass "home_summary"] 
    [ HH.text "There will be a terse description about me..."
    , HH.span [mkClass "home__links"] 
      [ HH.a [mkClass "link--background-grey", safeHref About] [HH.text "about you"]
      , HH.a [mkClass "link--background-grey", safeHref Contact] [HH.text "contact me"]
      , HH.a [mkClass "link__external link--background-grey", HP.href "https://github.com/fclaw"] [HH.text "github"]
      ]
    ] 
  ]