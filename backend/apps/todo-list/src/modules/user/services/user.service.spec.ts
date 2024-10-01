import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { Model } from 'mongoose';
import { User } from '../schemas/user.schema';
import { getModelToken } from '@nestjs/mongoose';

const userModelValue = {};

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        { provide: getModelToken('User'), useValue: userModelValue },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
