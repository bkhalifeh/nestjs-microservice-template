import { CommonModule, NatsModule } from '@app/shared';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { HashModule } from '../hash/hash.module';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';

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
    HashModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
