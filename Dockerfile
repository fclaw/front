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

COPY --chown=nix:nix ./nix/install.sh .

RUN touch .bash_profile && /home/nix/install.sh 

ENV PATH="/home/nix/bin:${PATH}"

FROM base as front-build

WORKDIR /build

COPY --chown=nix:nix . .

RUN . /home/nix/.nix-profile/etc/profile.d/nix.sh && \ 
      nix-env -i purescript && \
      nix-shell ./nix/build.nix --command "npm install && npm run generate_api && npm run bundle"

FROM base as main

WORKDIR /app

COPY --from=front-build /build/deploy /app
COPY --from=front-build /build/dist /app/dist
COPY --from=front-build /build/index.js /app
COPY --from=front-build /build/config.json /app
COPY --from=front-build /build/*.mjs /app
COPY --from=front-build /build/package.json /app
COPY --from=front-build /build/node_modules /app/node_modules
COPY --from=front-build /build/output /app/output
COPY --from=front-build /build/nix/prod.nix /app

ENTRYPOINT ["/app/init.sh"]