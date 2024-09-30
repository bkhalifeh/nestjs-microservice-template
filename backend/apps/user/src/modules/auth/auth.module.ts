import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UtilModule, UtilService } from '@app/shared';
import { UserModule } from '../user/user.module';
import { HashModule } from '../hash/hash.module';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [UtilModule],
      inject: [ConfigService, UtilService],
      useFactory: (configService: ConfigService, utilService: UtilService) => {
        return {
          secret: utilService.b64decode(configService.get('JWT_SECRET', '')),
          signOptions: { expiresIn: '7d' },
        };
      },
    }),
    UserModule,
    HashModule,
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
