module App.Data.Credentials
  ( Credentials(..)
  )
  where

import Prelude

newtype Credentials = Credentials String -- 'Basic ZmNsYXcwMDdAZ21haWwuY29tOnRlc3Q='

derive instance eqCredentials :: Eq Credentials
derive instance ordCredentials :: Ord Credentials

instance showCredentials :: Show Credentials where
  show (Credentials s) = s