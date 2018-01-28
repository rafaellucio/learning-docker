# learning-docker
> Repositório para aprendizado de tecnologias com Docker

### Prerequisitos
Instalar o [Docker](https://docs.docker.com/install/)

### Configurações de DEV

```shell
cd seu_workspace
git clone https://github.com/rafaellucio/learning-docker.git
cd learning-docker

cd app
docker swarm init
docker stack deploy -c docker-compose.yml apps

docker container ps
docker service ls
docker network ls
```

