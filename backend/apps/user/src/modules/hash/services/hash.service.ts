import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import argon2 from 'argon2';

import { UtilService } from '@app/shared';

@Injectable()
export class HashService {
  private readonly secret: Buffer;
  constructor(configService: ConfigService, utilService: UtilService) {
    this.secret = utilService.b64decode(
      configService.get<string>('ARGON_SECRET', ''),
    );
  }

  hash(plainText: string | Buffer): Promise<string> {
    return argon2.hash(plainText, {
      type: argon2.argon2i,
      secret: this.secret,
    });
  }

  verify(digest: string, plainText: string | Buffer): Promise<boolean> {
    return argon2.verify(digest, plainText, { secret: this.secret });
  }
}
