import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilService {
  b64decode(text: string): Buffer {
    return Buffer.from(text, 'base64');
  }
}
