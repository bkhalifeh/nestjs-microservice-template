<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Description

This is a template for NestJS projects that uses microservice architecture.

In this template, packages and tools with the highest speed and performance are used:

- **[Fastify](https://fastify.dev)** powers the server setup.
- **[Typia](https://typia.io)** handles data validation.
- **[Drizzle](https://orm.drizzle.team)** manages database interactions and operations.
- **[PostgreSQL](https://www.postgresql.org)** serves as the database.
- **[Protobuf](https://protobuf.dev)** facilitates event transmission between services.
- **[NATS](https://nats.io)** functions as the event bus.
- **[Redis](https://redis.io)** acts as both a cache manager and a queue system.

## How To Use

```bash
git clone https://github.com/bkhalifeh/nestjs-microservice-template.git my-project && \
cd my-project/backend && \
pnpm i && \
mv .env.example .env && \
cd .. && \
docker-compose -f docker-compose.dev.yaml up -d 
```
