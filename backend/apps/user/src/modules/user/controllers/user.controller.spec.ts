import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from '../services/user.service';
const userServiceValue = {};
describe('UserController', () => {
  let userController: UserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [{ provide: UserService, useValue: userServiceValue }],
    }).compile();

    userController = app.get<UserController>(UserController);
  });
  it('should be defined', () => {
    expect(userController).toBeDefined();
  });
});
