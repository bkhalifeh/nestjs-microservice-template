import { pb } from '@app/shared';
import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @EventPattern('UserCreated')
  async handleUserCreated(data: pb.UserCreated) {
    await this.userService.create(data.id);
  }
}
