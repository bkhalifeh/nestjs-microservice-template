import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModelDefinition } from './schemas/user.schema';

@Module({
  imports: [MongooseModule.forFeature([UserModelDefinition])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
