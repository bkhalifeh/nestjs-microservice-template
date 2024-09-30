import { Module } from '@nestjs/common';
import { HashService } from './services/hash.service';
import { UtilModule } from '@app/shared';

@Module({
  imports: [UtilModule],
  providers: [HashService],
  exports: [HashService],
})
export class HashModule {}
