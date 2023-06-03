
module App.Page.ProgessBar ( component ) where

import Prelude

import App.Api.Endpoints 
import App.Api.Utils
import App.Capability.LogMessages

import Halogen as H
import Halogen.HTML as HH
import Halogen.HTML.Properties as HP
import DOM.HTML.Indexed.InputType as HI
import App.Component.HTML.Utils (css)
import Web.File.File
import Halogen.HTML.Events as HE
import Data.Either
import Data.Function.Uncurried (runFn3, runFn1)
import Halogen.Store.Monad (getStore)
import Data.Maybe
import Data.Traversable
import Data.Maybe
import Halogen.Subscription as HS
import Effect.Aff as Aff
import Control.Monad.Rec.Class (forever, class MonadRec)
import Effect.Aff (Milliseconds(..), Aff)
import Effect.Console
import Effect.Aff.Class
import Effect.Class

data Action = Initialize | Up Int | SetForkId H.ForkId

type State = { progress :: Maybe Int, forkId :: Maybe H.ForkId }

component =
  H.mkComponent
    { initialState: const { progress: Nothing, forkId: Nothing }
    , render: render
    , eval: H.mkEval H.defaultEval
      { handleAction = handleAction
      , initialize = pure Initialize 
      }
    }
  where
    handleAction Initialize = void $ H.subscribe =<< subscribe Up
    handleAction (Up x) = do
      { progress: curr, forkId: ident } <- H.get
      H.modify_ \s -> 
        case _.progress s of 
          Nothing -> s { progress = pure x }
          Just c -> s { progress = pure $ c + x }
      for_ curr $ \c -> when (c + x == 100) $ for_ ident H.kill    
    handleAction (SetForkId ident) = H.modify_ \s -> s { forkId = pure ident }
    subscribe go = do 
      { emitter, listener } <- H.liftEffect HS.create
      ident <- H.fork $ forever $ do 
        liftAff $ Aff.delay $ Milliseconds 1000.0
        H.liftEffect $ HS.notify listener $ go 1
      handleAction (SetForkId ident)
      pure emitter

render {progress: curr}  = 
  HH.div
  [css "progress"] 
  [ 
    HH.div
    [css "progress-bar", HP.style ("width: " <> show (fromMaybe 0 curr) <> "%;"), role "sprogressbarad", ariaValuenow (fromMaybe 0 curr), ariaValuemax 100, ariaValuemin 0 ] 
    [
      HH.text $ show (fromMaybe 0 curr) <> "%"
    ]
  ]

role = HH.prop (HH.PropName "role")
ariaValuenow = HH.prop (HH.PropName "aria-valuenow")
ariaValuemin = HH.prop (HH.PropName "aria-valuemin")
ariaValuemax = HH.prop (HH.PropName "aria-valuemax")