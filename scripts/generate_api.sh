#!/bin/sh

url=$1

go() { 
  node api_updater.mjs $url
  yes | rm -rf src/App/Api/Foreign/*
  openapi-generator-cli generate -i api.json -g javascript -o src/App/Api/Foreign --additional-properties=usePromises=true,emitModelMethods=true

}

go