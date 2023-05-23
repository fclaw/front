module App.Page.Register.Error (Error(..)) where

import Prelude

import App.Component.Form.Validation as Class
import App.Data.Email (ValidationError)

import Data.Array.NonEmpty

newtype Error = Error (NonEmptyArray ValidationError)

instance Class.Validation Error where
  errorToString (Error es) = intercalate ", " $ map show es
