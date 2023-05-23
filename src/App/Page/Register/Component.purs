module App.Page.Register.Component (component) where

import Prelude

import App.Page.Register.Html (render, Action(..))

import App.Capability.Navigate (class Navigate, navigate)
import App.Data.Email (Email(..), parse)
import App.Data.Route (Route(..))
import App.Page.Register.Error as E

import Data.Foldable (traverse_)
import Data.Maybe (Maybe(..))
import Effect.Aff.Class (class MonadAff)
import Formless as F
import Halogen as H
import Halogen.HTML as HH
import Halogen.HTML.Events as HE
import Halogen.HTML.Properties as HP
import Data.Bifunctor

import Undefined

component :: forall query output m. MonadAff m => H.Component query Unit output m
component = F.formless { liftAction: Eval } mempty $ H.mkComponent
  { initialState: identity
  , render
  , eval: H.mkEval $ H.defaultEval
      { receive = Just <<< Receive
      , handleAction = handleAction
      , handleQuery = F.handleSubmitValidate onSubmit F.validate validation
      }
  }
  where
  handleAction :: Action -> H.HalogenM _ _ _ _ _ Unit
  handleAction (Receive context) = H.put context
  handleAction (Eval action) = F.eval action
  onSubmit = undefined -- >=> traverse_ (\_ -> navigate Home)
  validation = { email: lmap E.Error <<< parse <<< Email, password: pure }