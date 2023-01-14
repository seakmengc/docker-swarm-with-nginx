# docker-swarm-with-nginx

- build nginx image: `docker build -f ./Dockerfile.nginx -t mynginx:latest .`

- build web image: `docker build -t web_image:latest .`

- create network for swarm: `docker network create -d overlay stacknet --attachable`

- deploy stack: `docker stack deploy -c swarm.yml test`
