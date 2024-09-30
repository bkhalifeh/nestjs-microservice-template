import { Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from '../../user/services/user.service';
import { AuthSignUpDto } from '../dtos/auth-sign-up.dto';
import { AuthSignInDto } from '../dtos/auth-sign-in.dto';
import { HashService } from '../../hash/services/hash.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly hashService: HashService,
    private readonly jwtService: JwtService,
  ) {}

  signUp({ username, password }: AuthSignUpDto) {
    return this.userService.create(username, password);
  }

  async signIn({ username, password }: AuthSignInDto) {
    const user = await this.userService.findOne(username);
    if (user && (await this.hashService.verify(user.password, password))) {
      return { token: this.jwtService.sign({ id: user.id }) };
    }
    throw new NotFoundException('user not found');
  }
}
