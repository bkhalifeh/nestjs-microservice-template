import { UtilService } from '@app/shared/modules';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class IsUserAuth implements CanActivate {
  private readonly secret: Buffer;
  constructor(
    private readonly jwtService: JwtService,
    configService: ConfigService,
  ) {
    this.secret = Buffer.from(
      configService.get('JWT_SECRET', '') as string,
      'base64',
    );
  }

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = this.jwtService.verify(token, {
        secret: this.secret,
        ignoreExpiration: false,
      });
      request['user'] = payload;
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
