import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { CLIENT_NATS, UtilService } from '@app/shared';
import { UserService } from './user.service';
import { getModelToken } from '@nestjs/mongoose';
import { of } from 'rxjs';
import { SchemaTypes, Types } from 'mongoose';
import { User } from '../schemas/user.schema';

const clientNatsValue = {
  emit: jest.fn().mockReturnValue(of([])),
};

const username2User = new Map<string, User>([
  ['behzad', { username: 'behzad', password: '12345678' }],
  ['alireza', { username: 'alireza', password: '12345678' }],
  ['mehrzad', { username: 'mehrzad', password: '12345678' }],
]);

const userModelValue = {
  constructor: jest.fn((obj: { username: string; password: string }) => {
    return {
      save: jest.fn(() => {
        return {
          id: new Types.ObjectId().toString(),
          ...obj,
        };
      }),
      ...obj,
    };
  }),
  findOne: jest.fn((obj: { username: string }) =>
    username2User.get(obj.username),
  ),
};
describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        { provide: CLIENT_NATS, useValue: clientNatsValue },
        { provide: getModelToken('User'), useValue: userModelValue },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
