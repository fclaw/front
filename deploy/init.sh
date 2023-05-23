#!/bin/sh -eu

echo 'launch front..'
# call wait-for-it with args and then start node if it succeeds
exec ./wait-for-it.sh -h "127.0.0.1" -p "80" -t 300 -s -- npm run serve