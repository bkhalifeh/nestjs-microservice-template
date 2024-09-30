import { Module } from '@nestjs/common';
import { TodoListController } from './controllers/todo-list.controller';
import { TodoListService } from './services/todo-list.service';

@Module({
  imports: [],
  controllers: [TodoListController],
  providers: [TodoListService],
})
export class TodoListModule {}
