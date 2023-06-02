FROM amd64/ubuntu as base

ARG swagger_url

RUN echo $swagger_url

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

COPY --chown=nix:nix ./nix/install.sh .

RUN touch .bash_profile && /home/nix/install.sh 

ENV PATH="/home/nix/bin:${PATH}"

FROM base as front-build

WORKDIR /build

COPY --chown=nix:nix . .

RUN . /home/nix/.nix-profile/etc/profile.d/nix.sh && \ 
      nix-env -i purescript && \
      nix-shell ./nix/build.nix --command "npm install && npm run generate_api -- $swagger_url && npm run bundle"

FROM base as main

WORKDIR /app

COPY --from=front-build --chown=nix:nix /build/dist /app/dist
COPY --from=front-build --chown=nix:nix /build/node_modules /app/node_modules
COPY --from=front-build --chown=nix:nix /build/output /app/output
COPY --from=front-build --chown=nix:nix /build/nix/prod.nix /build/deploy /build/index.js /build/config.json /build/*.mjs /build/package.json /app/

ENTRYPOINT ["/app/init.sh"]