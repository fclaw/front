module App.Api.Utils
  ( makeRequest
  )
  where

import Prelude

import App.Data.Config
import App.Data.Credentials
import App.Api.Endpoints
import Effect
import Data.Function.Uncurried (runFn2)
import Effect.Exception (Error)
import Effect.Aff.Compat as AC
import Halogen as H
import Data.Either
import Effect.Aff (try)
import Effect.Aff.Class
import Foreign.Object (Object)
import Data.Maybe

makeRequest
  :: forall m api resp . 
  MonadAff m => 
  Host -> 
  Maybe Credentials -> 
  (ApiClient -> Effect api) -> 
  (api -> AC.EffectFnAff (Object resp)) -> 
  m (Either Error (Object resp))
makeRequest host cred mkApi runApi = do
 api <- H.liftEffect $ do runFn2 mkApiClient host cred >>= mkApi
 H.liftAff $ try $ AC.fromEffectFnAff $ runApi api