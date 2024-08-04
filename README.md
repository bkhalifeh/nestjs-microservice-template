<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Description

This is a template for NestJS projects that uses microservice architecture.

In this template, packages and tools with the highest speed and efficiency are used:

- **Fastify** is used for setting up the server.
- **Typia** is used for data validation.
- **Drizzle** is used for database interaction and operations.
- **PostgreSQL** is used as the database.
- **Protobuf** is used for event transmission between services.
- **NATS** is used as the event bus.
- **Redis** is used as a cache manager and queue system.

## How To Use

```bash
$ git clone https://github.com/bkhalifeh/nestjs-microservice-template.git my-project && \
cd my-project/backend && \
pnpm i && \
cd .. && \
docker-compose -f docker-compose.dev.yaml up -d
```
