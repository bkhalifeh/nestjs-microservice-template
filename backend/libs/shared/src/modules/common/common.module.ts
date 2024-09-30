import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: {
            colorize: true,
          },
        },
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        DATABASE_URL_USER: Joi.string().required().uri(),
        NATS_SERVER: Joi.string().required().uri(),
        ARGON_SECRET: Joi.string().required().base64(),
        JWT_SERCRET: Joi.string().required().base64(),
      }),
    }),
  ],
})
export class CommonModule {}
