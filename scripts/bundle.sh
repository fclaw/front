#!/bin/sh

go() {
   yes | rm node_modules/purescript/purs.bin
   cp $(which purs) node_modules/purescript 
   mv node_modules/purescript/purs node_modules/purescript/purs.bin
   spago build
   cp -r src/App/Api/Foreign output/App.Api.Endpoints
   node esbuild.mjs
}

go
