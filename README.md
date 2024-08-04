<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Description

This is a template for NestJS projects that uses microservice architecture.

In this template, packages and tools with the highest speed and performance are used:

- **[Fastify](https://fastify.dev)** is used for setting up the server.
- **[Typia](https://typia.io)** is used for data validation.
- **[Drizzle](https://orm.drizzle.team)** is used for database interaction and operations.
- **[PostgreSQL](https://www.postgresql.org)** is used as the database.
- **[Protobuf](https://protobuf.dev)** is used for event transmission between services.
- **[NATS](https://nats.io)** is used as the event bus.
- **[Redis](https://redis.io)** is used as a cache manager and queue system.

## How To Use

```bash
git clone https://github.com/bkhalifeh/nestjs-microservice-template.git my-project && \
cd my-project/backend && \
pnpm i && \
mv .env.example .env && \
cd .. && \
docker-compose -f docker-compose.dev.yaml up -d 
```
