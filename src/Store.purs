-- | A global state containing information useful to most components in the
-- | application. If you've ever used Redux, this should look familiar.
-- | Components can read, write, and subscribe to this central state, which is
-- | called a "store" by convention.
module Store
  ( Action(..)
  , Store(..)
  , Token(..)
  , readToken
  , reduce
  , removeToken
  , writeToken
  )
  where

import Prelude

import App.Data.Config (Config)
import App.Data.Profile (Profile)
import Data.Maybe (Maybe(..))
import Web.HTML (window)
import Web.HTML.Window (localStorage)
import Web.Storage.Storage (getItem, removeItem, setItem)
import Effect (Effect)
import App.Data.Credentials (Credentials (..))

-- | We can now construct our central state which will be available to all
-- | components (if they opt-in).
-- |
-- | First, we'll use a `LogLevel` flag to indicate whether we'd like to log
-- | everything (`Dev`) or only critical messages (`Prod`). Next, we'll maintain
-- | a configurable base URL. We'll also hold on to the currently-logged-in user.
type Store = { config :: Config, currentUser :: Maybe Profile }

-- | Ordinarily we'd write an initialStore function, but in our case we construct
-- | all three values in our initial store during app initialization. For that
-- | reason, you can see the store get constructed in the `Main` module.

-- | Next, we'll define a data type that represents state updates to our store.
-- | The log level and base URL should remain constant, but we'll need to be
-- | able to set the current user.
data Action = LoginUser Profile | LogoutUser

-- | Finally, we'll map this action to a state update in a function called a
-- | 'reducer'. If you're curious to learn more, see the `halogen-store`
-- | documentation!
reduce :: Store -> Action -> Store
reduce store (LoginUser profile) = store { currentUser = Just profile }
reduce store LogoutUser = store { currentUser = Nothing }


-- | Conduit uses a REST API and secures certain endpoints using a JSON Web Token (JWT). That means
-- | most requests will use the token to attach an "Authorization" header. It's critical that this
-- | token is not inadvertently exposed and that we attach a correct token to requests. We can
-- | prevent the token from being changed and restrict the ways it can be created using the smart
-- | constructor pattern. To learn more about this pattern, see:
-- |
-- | https://thomashoneyman.com/guides/real-world-halogen/design-data-pure-functions/#restricting-the-domain-using-smart-constructors
-- |
-- | To achieve this, we'll create a newtype without exporting its constructor. That means that
-- | the only functions that will be able to access the string within the `Token` type are in
-- | this module (like `login` and `register`). We can be confident that a `Token` used outside
-- | this module was retrieved properly and hasn't been tampered with in the meantime.
newtype Token = Token Credentials

-- | The following functions deal with writing, reading, and deleting tokens in local storage at a
-- | particular key. They'll be used as part of our production monad, `Conduit.AppM`.

tokenKey = "token" :: String

readToken :: Effect (Maybe Token)
readToken = do
  w <- window
  st <- localStorage w
  str <- getItem tokenKey st
  pure $ map (Token <<< Credentials) str

writeToken :: Token -> Effect Unit
writeToken (Token (Credentials str)) = do
  w <- window
  st <- localStorage w
  setItem tokenKey str st

removeToken :: Effect Unit
removeToken = removeItem tokenKey =<< localStorage =<< window