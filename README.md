# micro-catalog

This application is generated using [LoopBack 4 CLI](https://loopback.io/doc/en/lb4/Command-line-interface.html) with the
[initial project layout](https://loopback.io/doc/en/lb4/Loopback-application-layout.html).

## Docker

To run this application, just do

```sh
docker-compose up
```

In case of permission error, tr

```sh
chmod +x .docker/entrypoint.sh
```

## Elastic Search

In case of error, try giving permission to elasticdata folder

```sh
sudo chmod 777 -R .docker/elasticdata
```

## RabbitMQ

RabbitMQ's container was created in another docker-composer file
for the sake of learning `external networks`
