-- | The `Router` component is the root of our Halogen application. Every other component is a
-- | direct descendent of this component. We'll use the router to choose which component to render
-- | given a particular `Route` and to manage the user's location in the application.
-- |
-- | See `Main` to understand how this component is used as the root of the application.
module App.Component.Root
  ( Action(..)
  , ChildSlots
  , Query(..)
  , State
  , component
  )
  where

import Prelude

import App.Component.Utils (OpaqueSlot)
import App.Data.Profile (Profile)
import App.Data.Route (Route(..), routeCodec)
import App.Page.Home as Home
import App.Page.Login as Login
import App.Page.ProgessBar as ProgessBar
import App.Page.Register.Component as Register
import App.Capability.Navigate
import App.Capability.LogMessages as Log
import App.Data.Log as Log
import App.Capability.Now as Now

import Store as Store
import Data.Either (hush)
import Data.Foldable (elem)
import Data.Maybe (Maybe(..), fromMaybe, isJust)
import Effect.Aff.Class (class MonadAff)
import Halogen (liftEffect)
import Halogen as H
import Halogen.HTML as HH
import Halogen.Store.Connect (Connected, connect)
import Halogen.Store.Monad (class MonadStore)
import Halogen.Store.Select (selectEq)
import Routing.Duplex as RD
import Routing.Hash (getHash)
import Type.Proxy (Proxy(..))
import Undefined

data Query a = Navigate Route a

type State =
  { route :: Maybe Route
  , currentUser :: Maybe Profile
  }

data Action
  = Initialize
  | Receive (Connected (Maybe Profile) Unit)

type ChildSlots =
  ( home :: OpaqueSlot Unit
  , login :: OpaqueSlot Unit
  , register :: OpaqueSlot Unit
  , progessbar :: OpaqueSlot Unit
  )

component
  :: forall m
   . MonadAff m
  => MonadStore Store.Action Store.Store m
  => Now.Now m
  => Log.LogMessages m
  => Navigate m
  => H.Component Query Unit Void m
component = connect (selectEq _.currentUser) $ H.mkComponent
  { initialState: \{ context: currentUser } -> { route: Nothing, currentUser }
  , render
  , eval: H.mkEval $ H.defaultEval
      { handleQuery = handleQuery
      , handleAction = handleAction
      , receive = Just <<< Receive
      , initialize = Just Initialize
      }
  }
  where
  handleAction :: Action -> H.HalogenM State Action ChildSlots Void m Unit
  handleAction Initialize = do
    -- first we'll get the route the user landed on
    initialRoute <- hush <<< (RD.parse routeCodec) <$> liftEffect getHash
    -- then we'll navigate to the new route (also setting the hash)
    navigate $ fromMaybe Home initialRoute
  handleAction (Receive { context: currentUser }) = H.modify_ _ { currentUser = currentUser }

  handleQuery :: forall a. Query a -> H.HalogenM State Action ChildSlots Void m (Maybe a)
  handleQuery (Navigate dest a) = do
    { route, currentUser } <- H.get
    Log.log Log.Debug $
      "App.Component.Router,line 88: route:"
        <> show route
        <> ", user:"
        <> show currentUser
        <> ", destination:"
        <> show dest
    -- don't re-render unnecessarily if the route is unchanged
    when (route /= Just dest) $
      -- don't change routes if there is a logged-in user trying to access
      -- a route only meant to be accessible to a not-logged-in session
      case dest of
        Login
          | isJust currentUser -> pure unit
          | otherwise -> H.modify_ _ { route = Just dest }
        Register
          | isJust currentUser -> pure unit
          | otherwise -> H.modify_ _ { route = Just dest }
        EmailConfirmation _
          | isJust currentUser -> pure unit
          | otherwise -> H.modify_ _ { route = Just dest }
        otherwise -> H.modify_ _ { route = Just dest }
    pure $ Just a

render :: forall m
  . MonadAff m
  => MonadStore Store.Action Store.Store m
  => Now.Now m
  => Log.LogMessages m
  => Navigate m 
  => State 
  -> H.ComponentHTML Action ChildSlots m
render { route: Just Home } = 
  HH.slot_ (Proxy :: _ "home") unit Home.component unit
render { route: Just Login } = 
  HH.slot_ (Proxy :: _ "login") unit Login.component (Login.Intake { redirect: true } )
render { route: Just Register } = 
  HH.slot_ (Proxy :: _ "register") unit Register.component unit
render { route: Just ProgressBar } = 
  HH.slot_ (Proxy :: _ "progessbar") unit ProgessBar.component unit
render { route: Just (EmailConfirmation _) } = undefined
render _ = HH.div_ [ HH.text "Oh no! That page wasn't found." ]