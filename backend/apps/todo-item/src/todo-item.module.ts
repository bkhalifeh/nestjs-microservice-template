import { Module } from '@nestjs/common';
import { TodoItemController } from './todo-item.controller';
import { TodoItemService } from './todo-item.service';

@Module({
  imports: [],
  controllers: [TodoItemController],
  providers: [TodoItemService],
})
export class TodoItemModule {}
