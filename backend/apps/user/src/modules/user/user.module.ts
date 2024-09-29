import { Module } from '@nestjs/common';
import { CommonModule, NatsModule } from '@app/shared';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';

@Module({
  imports: [CommonModule, NatsModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
