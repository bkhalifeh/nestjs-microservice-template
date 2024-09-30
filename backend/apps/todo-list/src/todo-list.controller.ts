import { Controller, Get } from '@nestjs/common';
import { TodoListService } from './todo-list.service';

@Controller()
export class TodoListController {
  constructor(private readonly todoListService: TodoListService) {}

  @Get()
  getHello(): string {
    return this.todoListService.getHello();
  }
}
