import { Controller } from '@nestjs/common';
import { TodoListService } from '../services/todo-list.service';
import { EventPattern } from '@nestjs/microservices';
import { pb } from '@app/shared';

@Controller()
export class TodoListController {
  constructor(private readonly todoListService: TodoListService) {}

  @EventPattern('TodoListCreated')
  async handleTodoListCreated(data: pb.TodoListCreated) {
    await this.todoListService.create(data.user, data.id);
  }

  @EventPattern('TodoListDeleted')
  async handleTodoListDeleted(data: pb.TodoListDeleted) {
    await this.todoListService.delete(data.id);
  }
}
