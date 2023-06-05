module App.Page.Error  ( component ) where

import Prelude

import Halogen as H
import Halogen.HTML as HH
import Halogen.HTML.Properties as HP
import Effect.Ref as Ref
import Affjax
import Data.Maybe
import Effect.Ref as Ref
import Data.Foldable
import Effect.Aff.Class (class MonadAff)
import App.Data.Route as R
import App.Capability.Navigate
import Routing.Duplex (print)

type State = { err :: Maybe String }

data Action = Initialise

component
  :: forall m q
   . MonadAff m
  => Navigate m
  => Ref.Ref (Maybe (Response String))
  -> H.Component q Unit Void m
component errorRef =
  H.mkComponent
    { initialState: const { err: Nothing }
    , render: render
    , eval: H.mkEval H.defaultEval 
      { handleAction = handleAction
      , initialize = Just Initialise 
      }
    }
  where 
     handleAction :: forall s m . MonadAff m => Navigate m => Action -> H.HalogenM State Action s Void m Unit
     handleAction Initialise = do
       resp <- H.liftEffect $ Ref.read errorRef
       case resp of 
         Just { body } -> 
           H.modify_ $ \s -> s { err = pure body }
         _ -> navigate R.Home

  
mkClass = HP.class_ <<< HH.ClassName

safeHref = HP.href <<< append "#" <<< print R.routeCodec

render { err } = 
  HH.div_ 
  [
    HH.nav [mkClass "nav nav--border-top"] 
    [
      HH.span [mkClass "nav__logo"] [HH.a [mkClass "link--background-grey", safeHref R.Home] [HH.text "Sergey Yakovlev"]]
    ]
  , HH.div [mkClass "content withMargin"] 
    [
      HH.div [mkClass "error-centered"]
      [
        HH.p [mkClass "error.title"] [HH.text "Ooooops"]
      , HH.p [mkClass "error.text"] [HH.text (fromMaybe mempty err) ]
      ]
    ]
  ]