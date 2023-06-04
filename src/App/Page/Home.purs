module App.Page.Home ( component ) where

import Prelude

import Halogen as H
import Halogen.HTML as HH
import Halogen.HTML.Properties as HP
import App.Data.Route
import Routing.Duplex (print)
import Data.Maybe

import Undefined

type State = { body :: String }

data Action = Initialise


component =
  H.mkComponent
    { initialState: const { body: mempty }
    , render: render
    , eval: H.mkEval H.defaultEval 
      { handleAction = handleAction
      , initialize = Just Initialise
      }
    }
  where 
     handleAction Initialise = 
       H.modify_ \s -> s { body = "test" }

mkClass = HP.class_ <<< HH.ClassName

safeHref = HP.href <<< append "#" <<< print routeCodec

render { body }  = 
  HH.div [mkClass "home"] 
  [ HH.h1 [mkClass "home__title"] [HH.text "Sergey Yakovlev"]
  , HH.p [mkClass "home_summary"] 
    [ HH.text body
    , HH.span [mkClass "home__links"] 
      [ HH.a [mkClass "link--background-grey", safeHref About] [HH.text "about you"]
      , HH.a [mkClass "link--background-grey", safeHref Contact] [HH.text "contact me"]
      , HH.a [mkClass "link__external link--background-grey", HP.href "https://github.com/fclaw"] [HH.text "github"]
      ]
    ] 
  ]