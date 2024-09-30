import { TypedRoute, TypedBody } from '@nestia/core';
import { Controller } from '@nestjs/common';
import { AuthSignInDto } from '../dtos/auth-sign-in.dto';
import { AuthSignUpDto } from '../dtos/auth-sign-up.dto';
import { AuthService } from '../services/auth.service';

@Controller('user/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @TypedRoute.Post('sign-up')
  handleSignUpPost(@TypedBody() body: AuthSignUpDto) {
    return this.authService.signUp(body);
  }

  @TypedRoute.Post('sign-in')
  handleSignInPost(@TypedBody() body: AuthSignInDto) {
    return this.authService.signIn(body);
  }
}
