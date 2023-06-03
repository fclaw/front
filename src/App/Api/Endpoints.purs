module App.Api.Endpoints where

import Prelude

import Data.Function.Uncurried (Fn2, Fn1, Fn3)
import App.Data.Config (Host)
import App.Data.Credentials (Credentials)
import Effect (Effect)
import Foreign (Foreign)
import Data.Maybe
import Effect.Aff.Compat as AC
import Foreign.Object (Object)
import Web.File.File (File)

foreign import data ApiClient :: Type
foreign import data UserApi :: Type
foreign import data FrontApi :: Type
foreign import data Response :: Type -> Type
foreign import data RequestFrontendLog :: Type
foreign import data FileApi :: Type

foreign import mkApiClient :: Fn2 Host (Maybe Credentials) (Effect ApiClient)

foreign import mkUserApi :: Fn1 ApiClient (Effect UserApi)

foreign import data BasicCredentials :: Type
foreign import data ResponseBasicAuth :: Type
foreign import constructBasicCredentials :: Fn2 String String (Effect BasicCredentials)
foreign import validateJSONBasicCredentials :: Fn1 Foreign (Effect Boolean)
foreign import apiUserLoginBasicGet :: Fn2 BasicCredentials UserApi (AC.EffectFnAff (Object ResponseBasicAuth))
foreign import getCredentialsBasicAuth :: Fn1 (Object ResponseBasicAuth) Credentials

foreign import mkFrontApi :: Fn1 ApiClient (Effect FrontApi)

foreign import putFrontendLog :: forall a .  Fn2 RequestFrontendLog FrontApi (AC.EffectFnAff (Object (Response a)))
foreign import constructFrontendLog :: Fn2 String String (Effect RequestFrontendLog)

foreign import getDataFromResponse :: forall a . Fn1 (Object (Response a)) (Effect a)


foreign import mkFileApi :: Fn1 ApiClient (Effect FileApi)

foreign import sendFiles :: Fn3 String (Array File) FileApi (AC.EffectFnAff (Object (Response (Array Int))))

type Telegram = { host :: String, bot :: String, channel :: String }

foreign import sendMsgToTelegram :: Fn2 Telegram String (AC.EffectFnAff Foreign)

