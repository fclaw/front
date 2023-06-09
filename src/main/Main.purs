module Main (main) where

import Prelude (Unit, bind, ($), void, when, (/=), pure, discard, (>>=), (<<<))

import App.Data.Route (routeCodec)
import App.Component.Root as Root
import App.Data.Config as Cfg
import App.Data.Profile as P

import Effect (Effect)
import Halogen.Aff as HA
import Halogen.VDom.Driver (runUI)
import Undefined (undefined)
import Data.Maybe
import Effect.Aff (launchAff_, Aff, catchError)
import Halogen (liftEffect)
import Halogen as H
import Halogen.Aff as HA
import Halogen.VDom.Driver (runUI)
import Store as S
import AppM as AppM
import Data.Unit
import Routing.Hash (matchesWith)
import Routing.Duplex (parse)
import Data.Traversable (for)
import Data.Functor

import Effect.Console

main :: Cfg.Config -> Effect Unit
main config =
  HA.runHalogenAff do

    -- To run our Halogen app, we'll need two things:
    -- 1. An HTML element for Halogen to control
    -- 2. A component to mount at that HTML element, along with any arguments it requires

    -- First, we'll get a reference to the HTML element we want Halogen to attach to. Let's get a
    -- reference to the <body> tag as soon as it exists.
    body <- HA.awaitBody

    -- We have two of the three fields we need to create our central state. The
    -- third field is the current user profile. We'll try to retrieve it in a few steps.
    -- First, we'll use `readToken` to read an authentication token out of local
    -- storage. If we can read one, we'll use it to try and get a new user (which
    -- will fail if the token isn't valid).
    currentUser :: Maybe P.Profile <- liftEffect S.readToken >>= loadUser

    -- We now have the three pieces of information necessary to configure our app. Let's create
    -- a record that matches the `Store` type our application requires by filling in these three
    -- fields. If our environment type ever changes, we'll get a compiler error here.
    let
      initialStore :: S.Store
      initialStore = { config, currentUser }

    -- With our app environment ready to go, we can prepare the router to run as our root component.
    --
    -- But wait! Our router is configured to run in a monad that supports all our capabilities like
    -- navigation, API requests, and logging. More concretely, we'll run the application in our
    -- custom `AppM` monad, which supports all these.
    --
    -- But Halogen only knows how to run components in the `Aff` (asynchronous effects) monad. `Aff`
    -- has no idea how to interpret our capabilities. We need a way to change our router component so
    -- that it runs in `Aff` instead of `AppM`. We can do that with `runAppM`:
    rootComponent <- AppM.runAppM initialStore Root.component

    -- Now we have the two things we need to run a Halogen application: a reference to an HTML element
    -- and the component to run there.
    --
    -- To run a Halogen application, use the `runUI` function. It accepts the component to run, arguments
    -- to provide to the component (in our case, the landing page), and the reference to an HTML element.
    -- It will start the Halogen application and return a record with two fields:
    --
    -- `query`, which lets us send queries down to the root component
    -- `subscribe`, which lets us listen and react to messages output by the root component
    --
    -- Note: Since our root component is our router, the "queries" and "messages" above refer to the
    -- `Query` and `Message` types defined in the `Conduit.Router` module. Only those queries and
    -- messages can be used, or else you'll get a compiler error.
    halogenIO <- runUI rootComponent unit body

    -- Fantastic! Our app is running and we're almost done. All that's left is to notify the router
    -- any time the location changes in the URL.
    --
    -- We're using hash-based routing, so we'll use the `matchesWith` function from `Routing.Hash` to
    -- listen for changes in the hash and parse the result (using our routing codec, `routeCodec`,
    -- along with the `parse` function from `Routing.Duplex`). Any time we parse a new location we'll
    -- trigger a `Navigate` query in the router.
    --
    -- If you feel confused by what's going on here, I'd recommend the `purescript-routing` and
    -- `purescript-routing-duplex` guides:
    --
    -- https://github.com/slamdata/purescript-routing/blob/v8.0.0/GUIDE.md
    -- https://github.com/natefaubion/purescript-routing-duplex/blob/v0.2.0/README.md
    void $ liftEffect $ matchesWith (parse routeCodec) \old new ->
      when (old /= Just new) $ launchAff_ $
        catchError (void (halogenIO.query (H.mkTell (Root.Navigate new)))) (liftEffect <<< logShow)

loadUser :: Maybe S.Token -> Aff (Maybe P.Profile)
loadUser token = for token \(_ :: S.Token) -> undefined