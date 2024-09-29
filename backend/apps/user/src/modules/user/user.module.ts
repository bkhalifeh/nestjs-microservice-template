import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule, NatsModule } from '@app/shared';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    CommonModule,
    NatsModule,
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          uri: configService.get('DATABASE_URL_USER'),
        };
      },
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
