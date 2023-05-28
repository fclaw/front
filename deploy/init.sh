#!/bin/sh -eu

echo 'launch front..'
# call wait-for-it with args and then start node if it succeeds
nix-shell prod.nix --command "npm run serve"