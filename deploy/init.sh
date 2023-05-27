#!/bin/sh -eu

echo 'launch front..'
# call wait-for-it with args and then start node if it succeeds
exec nix-shell --command "npm run serve"