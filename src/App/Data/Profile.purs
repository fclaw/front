module App.Data.Profile (Profile) where

import Prelude

import App.Data.Email as E
import App.Data.Credentials as C

type Profile = { email :: E.Email, credentials :: C.Credentials }
