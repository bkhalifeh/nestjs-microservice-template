import { Injectable } from '@nestjs/common';
import { User, UserModel } from '../schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: UserModel,
  ) {}

  async create(userId: string) {
    return this.userModel.create({ id: new Types.ObjectId(userId) });
  }
}
