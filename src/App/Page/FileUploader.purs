
module App.Page.FileUploader ( component ) where

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

data Action = Choose (Array File) | Send

type State = { files :: Maybe (Array File), bucket :: String }

component =
  H.mkComponent
    { initialState: const { files: Nothing, bucket: "file" }
    , render: const $ render
    , eval: H.mkEval H.defaultEval { handleAction = handleAction }
    }

handleAction (Choose []) = H.modify_ \s -> s { files = Nothing }
handleAction (Choose xs ) = H.modify_ \s -> s { files = Just xs }
handleAction Send = do 
  { config: { url } } <- getStore
  {files: xs, bucket: bucket } <- H.get
  for_ xs $ \files -> do
    res <- makeRequest url Nothing mkFileApi $ runFn3 sendFiles bucket files
    case res of 
      Right resp -> map show (H.liftEffect (runFn1 getDataFromResponse resp)) >>= logDebug
      Left e -> logDebug $ show e

render = 
  HH.div
  [css "custom-file"] 
  [
    HH.input [HP.id "customFile", HP.type_ HI.InputFile, css "custom-file-input", HE.onFileUpload Choose]
  , HH.label [css "custom-file-label", HP.for "customFil"] [HH.text "Choose file"]
  , HH.input [HP.type_ HI.InputSubmit, HE.onClick (const Send)  ]
  ]