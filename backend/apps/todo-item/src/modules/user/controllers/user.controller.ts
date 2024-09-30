import { Controller } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { EventPattern } from '@nestjs/microservices';
import { pb } from '@app/shared';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @EventPattern('UserCreated')
  async handleUserCreated(data: pb.UserCreated) {
    await this.userService.create(data.id);
  }
}
