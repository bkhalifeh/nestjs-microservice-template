import { CLIENT_NATS, pb } from '@app/shared';
import { Inject, Injectable } from '@nestjs/common';
import { ClientNats } from '@nestjs/microservices';

@Injectable()
export class UserService {
  constructor(
    @Inject(CLIENT_NATS)
    private readonly client: ClientNats,
  ) {}

  create() {
    this.client
      .emit<
        any,
        pb.UserCreated
      >('UserCreated', { id: 1, fullName: 'behzad khalifeh' })
      .subscribe();
    return {};
  }
}
