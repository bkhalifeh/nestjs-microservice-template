import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoItemService {
  getHello(): string {
    return 'Hello World!';
  }
}
