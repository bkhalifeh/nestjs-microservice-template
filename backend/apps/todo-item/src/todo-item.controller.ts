import { Controller, Get } from '@nestjs/common';
import { TodoItemService } from './todo-item.service';

@Controller()
export class TodoItemController {
  constructor(private readonly todoItemService: TodoItemService) {}

  @Get()
  getHello(): string {
    return this.todoItemService.getHello();
  }
}
