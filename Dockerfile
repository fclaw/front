ARG host=amd64

FROM --platform=${host} alpine as fetcher

# Enable HTTPS support in wget.
RUN apk add --no-cache openssl ca-certificates make

# Install it in busybox for a start
COPY ./docker-nix .

RUN ./alpine-install.sh

ENV PATH=/nix/var/nix/profiles/default/bin:/usr/bin:/bin

# Give us a basic environment
RUN nix-channel --add \
  https://nixos.org/channels/nixos-23.05 nixpkgs && \
  nix-channel --update


RUN nix-env -iA \
  nixpkgs.bashInteractive \
  nixpkgs.cacert \
  nixpkgs.coreutils \
  nixpkgs.gitMinimal \
  nixpkgs.gnutar \
  nixpkgs.gzip \
  nixpkgs.iana-etc \
  nixpkgs.xz \ 
  && true

# Remove old things
RUN \
  nix-channel --remove nixpkgs && \
  rm -rf /nix/store/*-nixpkgs* && \
  nix-collect-garbage -d

# Fixes missing hashes
RUN nix-store --verify --check-contents

# Fixes root login shell
RUN sed -e "s|/bin/ash|/bin/bash|g" -i /etc/passwd

FROM scratch as nix-builder
COPY --from=fetcher /etc/group /etc/group
COPY --from=fetcher /etc/passwd /etc/passwd
COPY --from=fetcher /etc/shadow /etc/shadow
COPY --from=fetcher /nix /nix
COPY --from=fetcher /root /root

RUN ["/nix/var/nix/profiles/default/bin/ln", "-s", "/nix/var/nix/profiles/default/bin", "/bin"]

RUN \
  mkdir -p /usr/bin && \
  ln -s /nix/var/nix/profiles/default/etc/ssl /etc/ssl && \
  ln -s /nix/var/nix/profiles/default/etc/protocols /etc/protocols && \
  ln -s /nix/var/nix/profiles/default/etc/services /etc/services && \
  ln -s /nix/var/nix/profiles/default/bin/env /usr/bin/env && \
  mkdir --mode=1777 /tmp

ENV \
    ENV=/nix/var/nix/profiles/default/etc/profile.d/nix.sh \
    PATH=/nix/var/nix/profiles/default/bin:/nix/var/nix/profiles/default/sbin:/bin:/sbin:/usr/bin:/usr/sbin \
    PAGER=cat \
    GIT_SSL_CAINFO=/nix/var/nix/profiles/default/etc/ssl/certs/ca-bundle.crt \
    NIX_SSL_CERT_FILE=/nix/var/nix/profiles/default/etc/ssl/certs/ca-bundle.crt \
    NIX_PATH=/nix/var/nix/profiles/per-user/root/channels

# The sandbox requires privileged docker containers
RUN mkdir -p /etc/nix && echo sandbox = false > /etc/nix/nix.conf

FROM nix-builder as front-build

WORKDIR /build

COPY . .

RUN mv /build/package.json.docker /build/package.json

RUN nix-channel --add \
    https://nixos.org/channels/nixos-23.05 nixpkgs && \
    nix-channel --update 
    
# RUN  nix-env -iA nixpkgs.which && \
#      nix-env -iA nixpkgs.purescript && \ 
#      nix-env -iA nixpkgs.nodejs-18_x && \
#      nix-env -iA nixpkgs.jdk && \
RUN  nix-env -iA nixpkgs.gnumake && \ 
     nix-env -iA nixpkgs.wget && \
     nix-env -iA nixpkgs.gzip && \ 
     nix-env -iA nixpkgs.xz && \
     nix-env -iA nixpkgs.curl  && \
     nix-env -iA nixpkgs.stack && \
     nix-env -iA nixpkgs.glibc

RUN wget -O- "https://github.com/purescript/spago/archive/refs/tags/0.21.0.tar.gz" > spago-source.tar.gz && tar -xvf spago-source.tar.gz

RUN cd spago-0.21.0 && make install

# RUN cp $(which purs) ./deploy/purescript-0.15.9 && mv ./deploy/purescript-0.15.9/purs ./deploy/purescript-0.15.9/purs.bin 

# RUN npm install
# RUN mv /build/spago /build/node_modules/spago

# RUN npm run generate_api && npm run bundle

# FROM nix-builder as main

# WORKDIR /app

# COPY --from=front-build /build/deploy /app
# COPY --from=front-build /build/dist /app/dist
# COPY --from=front-build /build/index.js /app
# COPY --from=front-build /build/prod.nix /app
# COPY --from=front-build /build/config.json /app
# COPY --from=front-build /build/*.mjs /app
# COPY --from=front-build /build/package.json /app
# COPY --from=front-build /build/node_modules /app/node_modules
# COPY --from=front-build /build/output /app/output

# ENTRYPOINT ["/app/init.sh"]