module App.Data.Credentials
  ( Basic(..)
  , Credentials(..)
  , JWT(..)
  )
  where

import Prelude

import Data.Either 
import Data.Newtype

newtype Basic = Basic String

derive instance newtypeBasic :: Newtype Basic _
derive instance eqBasic :: Eq Basic
derive instance ordBasic :: Ord Basic

newtype JWT = JWT String

derive instance newtypeJWT :: Newtype JWT _
derive instance eqJWT :: Eq JWT
derive instance ordJWT :: Ord JWT

newtype Credentials = Credentials (Either Basic JWT) -- 'Basic ZmNsYXcwMDdAZ21haWwuY29tOnRlc3Q='

derive instance eqCredentials :: Eq Credentials
derive instance ordCredentials :: Ord Credentials

instance showCredentials :: Show Credentials where
  show (Credentials (Left cred)) = "basic: " <> unwrap cred
  show (Credentials (Right cred)) = "jwt: " <> unwrap cred