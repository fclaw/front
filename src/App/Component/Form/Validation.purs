module App.Component.Form.Validation (class Validation, errorToString) where

class Validation e where
  errorToString :: e -> String