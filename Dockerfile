FROM amd64/ubuntu as fetcher

# Enable HTTPS support in wget.
RUN apt update && apt install -y openssl ca-certificates wet tar

# Install it in busybox for a start
COPY ./docker-nix .

RUN ./alpine-install.sh

ENV PATH=/nix/var/nix/profiles/default/bin:/usr/bin:/bin

# Give us a basic environment
RUN nix-channel --add \
  https://nixos.org/channels/nixos-23.05 nixpkgs && \
  nix-channel --update

# Fixes missing hashes
RUN nix-store --verify --check-contents

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

FROM fetcher as front-build

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
#      nix-env -iA nixpkgs.wget && \
#      nix-env -iA nixpkgs.gzip && \ 
#      nix-env -iA nixpkgs.xz && \
RUN  nix-env -iA nixpkgs.spago

RUN spago

# RUN wget -O- "https://github.com/purescript/spago/releases/download/0.21.0/Linux.tar.gz" > spago-exec.tar.gz && tar -xvf spago-exec.tar.gz

# RUN cp $(which purs) ./deploy/purescript-0.15.9 && mv ./deploy/purescript-0.15.9/purs ./deploy/purescript-0.15.9/purs.bin 

# RUN npm install

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