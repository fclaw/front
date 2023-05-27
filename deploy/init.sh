#!/bin/sh -eu

echo 'launch front..'
# call wait-for-it with args and then start node if it succeeds
exec . /home/nix/.nix-profile/etc/profile.d/nix.sh && nix-shell --command "npm run serve"