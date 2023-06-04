module App.Page.Home (component) where

import Prelude

import App.Component.HTML.Utils (css)

import Halogen as H
import Halogen.HTML as HH
import Halogen.HTML.Events as HE
import Halogen.Store.Monad (getStore, class MonadStore)
import Effect.Aff.Class (class MonadAff)
import Type.Proxy (Proxy(..))
import Web.Socket as WS
import Web.Socket.ReadyState  as WS
import Halogen.Subscription as HS
import Effect.Aff as Aff
import Control.Monad.Rec.Class (forever, class MonadRec)
import Control.Monad.Rec.Loops (untilM_)
import Effect.Aff (Milliseconds(..))
import Effect (Effect)
import Unsafe.Coerce (unsafeCoerce)
import Data.Function.Uncurried (runFn2, runFn1)
import App.Api.Endpoints (getDataFromResponse)
import Effect.Aff.Compat as AC
import App.Capability.LogMessages
import Data.Either
import Effect.Aff (try)
import App.Api.Endpoints
import Foreign.Object
import Effect.Ref as Ref
import Data.Maybe
import Effect.Exception (Error)
import Data.Foldable (for_)
import Effect.Class (class MonadEffect)
import Effect.Console
import App.Data.Config
import Data.Newtype (unwrap)

data ParentAction = GetState

component =
  H.mkComponent
    { initialState: identity
    , render: const $ HH.div [ css "center" ] [ HH.slot_ (Proxy :: Proxy "systemInfo") 0 systemInfo { msg: (mempty :: String) } ]
    , eval: H.mkEval H.defaultEval
    }

data Action = Initialize | Recieve String

type State = { msg :: String }

systemInfo = 
  H.mkComponent
    { initialState: const { msg: (mempty :: String) }
    , render: \{ msg } -> 
         HH.div 
         [css "child"] 
         [HH.text ("Welcome to the home page! system info is: " <> msg)]
    , eval: H.mkEval H.defaultEval 
      { handleAction = handleAction
      , initialize = pure Initialize 
      }
    }
  where
    handleAction Initialize = do
      { config: { wsUrl } } <- getStore
      void $ H.subscribe =<< getMsg wsUrl Recieve
    handleAction (Recieve new) =
      H.modify_ \s ->  s { msg = new } 

getMsg :: forall m a b c . Bind m => MonadEffect m => MonadAff m => MonadRec m => WSUrl -> (a -> b) -> m (HS.Emitter b)
getMsg url go = do
 { emitter, listener } <- H.liftEffect HS.create
 ws <- H.liftEffect $ runFn2 WS.createWebSocket (unwrap url <> "/api/public/server/info") []
 let isOpen = do 
        Aff.delay $ Milliseconds 1000.0
        st <-  H.liftEffect $ WS.readyState ws
        if st == WS.Open then pure true 
        else isOpen 
 H.liftAff $ unlessM isOpen $ pure unit
 void $ H.liftAff $ Aff.forkAff $ forever $ do 
   Aff.delay $ Milliseconds 1000.0
   st <- H.liftEffect $ WS.readyState ws
   when (st == WS.Open) $ do
     res <- try $ H.liftAff $ AC.fromEffectFnAff $ runFn1 WS.getObject ws
     case res of 
       Right resp -> 
         H.liftEffect $ do 
           msg <- runFn1 getDataFromResponse resp
           HS.notify listener $ go msg
       Left e -> H.liftEffect $ logError $ show e
 pure emitter
