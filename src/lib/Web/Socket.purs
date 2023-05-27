module Web.Socket where

import Prelude

import Data.Function.Uncurried (Fn2, Fn1, runFn2)
import Data.Unit
import Effect
import Partial.Unsafe (unsafePartial)
import Web.Socket.ReadyState (toEnumReadyState, ReadyState)
import Data.Maybe (fromJust)
import Foreign.Object (Object)
import App.Api.Endpoints (Response)
import Effect.Aff.Compat as AC
import Data.Either

newtype Protocol = Protocol String

foreign import data WebSocket :: Type

foreign import createWebSocket :: Fn2 String (Array Protocol) (Effect WebSocket)
foreign import readyStateImpl :: Fn1 WebSocket (Effect Int)

readyState :: WebSocket -> Effect ReadyState
readyState ws = do
  rs <- readyStateImpl ws
  pure $ unsafePartial $ fromJust $ toEnumReadyState rs

foreign import getObject ::  forall a . Fn1 WebSocket (AC.EffectFnAff (Object (Response a)))