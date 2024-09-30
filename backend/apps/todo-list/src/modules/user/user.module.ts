import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModelDefinition } from './schemas/user.schema';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';

@Module({
  imports: [MongooseModule.forFeature([UserModelDefinition])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
