import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { HashService } from '../../hash/services/hash.service';
import { UserService } from '../../user/services/user.service';
import { JwtService } from '@nestjs/jwt';

const userServiceValue = {};
const hashServiceValue = {};
const jwtServiceValue = {};

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: HashService, useValue: hashServiceValue },
        { provide: UserService, useValue: userServiceValue },
        { provide: JwtService, useValue: jwtServiceValue },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
