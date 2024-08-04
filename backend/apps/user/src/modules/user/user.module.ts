import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BullModule } from '@nestjs/bullmq';
import {
  DrizzleModule,
  NatsModule,
  RedisModule,
  RedisService,
} from '@app/shared';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import * as schema from '../../../db/schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RedisModule.forRoot('user'),
    DrizzleModule.forRoot('user', schema),
    NatsModule,
    BullModule.forRootAsync({
      inject: [RedisService],
      useFactory: (redisService: RedisService) => {
        return {
          connection: redisService,
        };
      },
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
