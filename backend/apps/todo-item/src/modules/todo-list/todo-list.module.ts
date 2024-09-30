import { Module } from '@nestjs/common';
import { TodoListService } from './services/todo-list.service';
import { TodoListController } from './controllers/todo-list.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoListModelDefinition } from './schemas/todo-list.schema';
import { TodoItemModule } from '../todo-item/todo-item.module';

@Module({
  imports: [
    MongooseModule.forFeature([TodoListModelDefinition]),
    TodoItemModule,
  ],
  controllers: [TodoListController],
  providers: [TodoListService],
})
export class TodoListModule {}
