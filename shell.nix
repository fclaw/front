let
   pkgs = import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/nixpkgs-unstable.tar.gz") {};
   nodejs = pkgs.nodejs-18_x;
   python3 = pkgs.python3;
   python = pkgs.python;
   git = pkgs.git;
   jdk = pkgs.jdk;
in
pkgs.mkShell { 
  buildInputs = [ git nodejs jdk ];
  shellHook = ''
    npm install --save-exact esbuild
    npm install purs-tidy
    npm install @openapitools/openapi-generator-cli -D
    npm install querystring
    npm install superagent
    export PATH="./node_modules/.bin:$PATH"
   '';
  }