# learning-docker
> Repositório para aprendizado de tecnologias com Docker

### Prerequisitos
Para utilizar este projeto é necessário ter a versão 9.2.0 do Node.js, sugerimos a instalação de um gerenciador de versões Node.js chamado NVM

Unix

```shell
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
nvm install 9.2.0
```

Windows
Baixar [nvm-setup](https://github.com/coreybutler/nvm-windows/releases/download/1.1.5/nvm-setup.zip) e next, next, finish

### Configurações de DEV

```shell
cd seu_workspace
git clone https://github.com/rafaellucio/learning-docker.git
cd learning-docker

cd app1
npm install
npm run build
docker build -t app1 .
cd ..

cd app2
npm install
npm run build
docker build -t app2 .
cd ..

cd app3
npm install
npm run build
docker build -t app3 .
cd ..

cd app
docker build -t app .
docker swarm init
docker stack deploy -c docker-compose.yml apps

docker container ps
docker service ls
docker network ls
```

