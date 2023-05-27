ARG build_image=ubuntu
ARG node_image=node:18.16.0-alpine

FROM ${build_image} as build

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

COPY --chown=nix:nix . .

RUN touch .bash_profile && deploy/nix.sh 

ENV PATH="/home/nix/bin:${PATH}"

RUN . /home/nix/.nix-profile/etc/profile.d/nix.sh && \
     nix-shell --command "npm install && purs-tidy format-in-place \"src/**/*.purs\" && npm run generate_api && npm run bundle"

RUN ls -la $HOME

FROM ${node_image}

WORKDIR app

COPY --from=build /home/nix/index.js /app
COPY --from=build /home/nix/dist /app
COPY --from=build /home/nix/deploy /app

RUN ls -la $HOME

ENTRYPOINT ["/app/deploy/init.sh"]