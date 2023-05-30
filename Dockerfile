FROM amd64/ubuntu as base

RUN apt update && \
    apt install -y curl && \
    apt install -y tar && \
    apt install -y xz-utils

RUN addgroup --system nixbld && \
    adduser --home /home/nix --disabled-password --gecos "" --shell /bin/bash nix && \
    adduser nix nixbld && \
    mkdir -m 0755 /nix && chown nix /nix && \
    mkdir -p /etc/nix && echo 'sandbox = false' > /etc/nix/nix.conf

CMD /bin/bash -l
USER nix
ENV USER nix
WORKDIR /home/nix

COPY --chown=nix:nix ./deploy/nix.sh .

RUN touch .bash_profile && nix.sh 

ENV PATH="/home/nix/bin:${PATH}"

FROM base as front-build

WORKDIR /build

COPY . .

RUN nix-shell --version

# RUN nix-channel --add \
#     https://nixos.org/channels/nixos-23.05 nixpkgs && \
#     nix-channel --update 
    
# RUN  nix-env -iA nixpkgs.which && \
#      nix-env -iA nixpkgs.purescript && \ 
#      nix-env -iA nixpkgs.nodejs-18_x && \
#      nix-env -iA nixpkgs.jdk && \
#      nix-env -iA nixpkgs.wget && \
#      nix-env -iA nixpkgs.gzip && \ 
#      nix-env -iA nixpkgs.xz && \
# RUN  nix-env -iA nixpkgs.spago

# RUN spago

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