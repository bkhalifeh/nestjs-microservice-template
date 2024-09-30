import { JwtModule } from '@nestjs/jwt';
import { UtilModule } from '../modules/util/util.module';
import { ConfigService } from '@nestjs/config';
import { UtilService } from '../modules/util/services/util.service';

export const CLIENT_NATS = 'CLIENT_NATS';
export const jwtModule = JwtModule.registerAsync({
  imports: [UtilModule],
  inject: [ConfigService, UtilService],
  useFactory: (configService: ConfigService, utilService: UtilService) => {
    return {
      secret: utilService.b64decode(configService.get('JWT_SECRET', '')),
      signOptions: { expiresIn: '7d' },
    };
  },
});
