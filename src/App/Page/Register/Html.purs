module App.Page.Register.Html
  ( Action(..)
  , Form
  , FormContext
  , FormlessAction
  , render
  ) where

import Prelude

import App.Component.Form.Validation

import Halogen.HTML as HH
import App.Component.Form.Field as Field
import Data.Foldable (traverse_)
import Data.Maybe (Maybe(..))
import Effect.Aff.Class (class MonadAff)
import Formless as F
import Halogen as H
import Halogen.HTML as HH
import Halogen.HTML.Events as HE
import Halogen.HTML.Properties as HP
import App.Page.Register.Error (Error)
import App.Data.Email (Email, ValidationError)
import Data.Array.NonEmpty

import Undefined

type Form :: (Type -> Type -> Type -> Type) -> Row Type
type Form f =
  ( email :: f String Error Email
  , password :: f String Error String
  )

type FormlessAction = F.FormlessAction (Form F.FieldState)
type FormContext = F.FormContext (Form F.FieldState) (Form (F.FieldAction Action)) Unit Action

data Action
  = Receive FormContext
  | Eval FormlessAction

render :: forall m e el. FormContext -> H.ComponentHTML Action () m
render { formActions, fields, actions } =
  HH.form
    [ HE.onSubmit formActions.handleSubmit ]
    [ HH.fieldset_
        [ Field.textInput
            { state: fields.email, action: actions.email }
            [ HP.placeholder "Email"
            , HP.type_ HP.InputEmail
            ]
        , Field.textInput
            { state: fields.password, action: actions.password }
            [ HP.placeholder "Password "
            , HP.type_ HP.InputPassword
            ]
        , HH.input
            [ HP.type_ HP.InputSubmit
            , HP.value "Sign up"
            ]
        ]
    ]