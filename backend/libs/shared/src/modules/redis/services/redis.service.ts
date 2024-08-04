import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Redis } from 'ioredis';

@Injectable()
export class RedisService extends Redis implements OnModuleInit {
  constructor(
    @Inject('CACHE_NAME') private readonly cacheName: string,
    configService: ConfigService,
  ) {
    super(configService.get<string>(`CACHE_URL_${cacheName}`, ''), {
      lazyConnect: true,
    });
  }

  async onModuleInit() {
    await this.connect();
  }
}
