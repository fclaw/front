module App.Data.Email
  ( Email(..)
  , ValidationError(..)
  , parse
  )
  where

import Prelude (class Eq, class Ord, class Show, Unit, const, flip, not, otherwise, pure, unit, ($), (<*), (<<<))

import Data.Codec.Argonaut (JsonCodec)
import Data.Codec.Argonaut as CA
import Data.Profunctor (dimap)
import Data.String.Regex as Reg
import Data.Either
import Data.Array.NonEmpty
import Data.Validation.Semigroup (V(..), andThen, toEither, validation)
import Data.String.Regex.Flags (noFlags)
import Data.Bifunctor (lmap)
import Data.Generic.Rep
import Data.Show.Generic (genericShow)
import Data.Newtype (class Newtype, unwrap)

-- | We'll represent email as a newtype wrapper around a string. Newtypes have no performance
-- | overhead, so they're the fastest way to add a documenting type to a primitive type like
-- | `String`.
newtype Email = Email String

derive instance newtypeEmail :: Newtype Email _

derive instance eqEmail :: Eq Email
derive instance ordEmail :: Ord Email

derive instance genericEmail :: Generic Email _
instance showEmail :: Show Email where
  show = genericShow

codec :: JsonCodec Email
codec = dimap (\(Email email) -> email) Email CA.string

data ValidationError = WrongEmail | RegError String

instance showValidationError :: Show ValidationError where
  show WrongEmail = "wrong email"
  show (RegError s) = "the regexp against which an email is checked is wrong"

parse :: Email -> Either (NonEmptyArray ValidationError) Email
parse email = toEither $ andThen (validate (unwrap email)) $ const (pure email)

validate :: String -> V (NonEmptyArray ValidationError) Unit
validate s = validation (V <<< Left) ((flip (<*) checkEmailDomain) <<< checkEmail) init
  where
  init = V ((lmap (singleton <<< RegError)) (Reg.regex "[a-z0-9]+@[a-z]+\\.[a-z]{2,3}" noFlags))
  checkEmail regexp
    | not (Reg.test regexp s) =
        V (Left $ singleton WrongEmail)
    | otherwise = V (Right unit)
  checkEmailDomain = V $ Right unit