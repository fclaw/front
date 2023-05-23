-- | This module provides small utilities for building form fields with Formless. They're not
-- | necessary to use the library, but help alleviate a little boilerplate around handling
-- | inputs. To read more about how to use the Formless library, see:
-- | https://github.com/thomashoneyman/purescript-halogen-formless
-- |
-- | In a framework like React, little bundles of functionality like this might be individual
-- | components. In Halogen, they're simple pure functions which produce HTML.
module App.Component.Form.Field
  ( TextInput
  , textInput
  ) where

import Prelude

import App.Component.HTML.Utils (css, maybeElem)
import App.Component.Form.Validation
import DOM.HTML.Indexed (HTMLinput, HTMLtextarea)
import Data.Either (blush)
import Data.Maybe (Maybe(..))
import Formless as F
import Halogen as H
import Halogen.HTML as HH
import Halogen.HTML.Events as HE
import Halogen.HTML.Properties as HP

type TextInput action output e =
  { state :: F.FieldState String e output
  , action :: F.FieldAction action String e output
  }

-- | Our application ought to define a set of reusable, styled form controls that
-- | are compatible with Formless. This helper function constructs an input field
-- | with styles, events, error handling, and more, given a Formless field.
textInput
  :: forall output action slots m e el
   . Validation e
  => TextInput action output e
  -> Array (HP.IProp HTMLinput action)
  -> H.ComponentHTML action slots m
textInput { state, action } props =
  HH.fieldset
    []
    [ HH.input
        ( append
            [ HP.value state.value
            , HE.onValueInput action.handleChange
            , HE.onBlur action.handleBlur
            ]
            props
        )
    , maybeElem (state.result >>= blush) \err ->
        HH.div_ [ HH.text $ errorToString err ]
    ]
