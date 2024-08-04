import { NestFactory } from '@nestjs/core';
import { VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NatsOptions } from '@nestjs/microservices';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { getNatsOption } from '@app/shared';
import { UserModule } from './modules/user/user.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    UserModule,
    new FastifyAdapter({}),
  );

  const configService = app.get(ConfigService);
  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });
  app.connectMicroservice<NatsOptions>(getNatsOption(configService));
  await app.startAllMicroservices();
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
