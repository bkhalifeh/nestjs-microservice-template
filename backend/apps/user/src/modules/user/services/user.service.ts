import { CLIENT_NATS, pb } from '@app/shared';
import { Inject, Injectable, NotAcceptableException } from '@nestjs/common';
import { ClientNats } from '@nestjs/microservices';
import { User, UserModel } from '../schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(
    @Inject(CLIENT_NATS)
    private readonly client: ClientNats,
    @InjectModel(User.name)
    private readonly userModel: UserModel,
  ) {}

  async create(username: string, password: string) {
    let newUser = new this.userModel({ username, password });
    try {
      newUser = await newUser.save();
    } catch (e) {
      throw new NotAcceptableException('try another username');
    }
    this.client
      .emit<any, pb.UserCreated>('UserCreated', { id: newUser.id })
      .subscribe();
    return {
      id: newUser.id,
      username: newUser.username,
    };
  }

  async findOne(username: string) {
    return this.userModel.findOne({ username });
  }
}
