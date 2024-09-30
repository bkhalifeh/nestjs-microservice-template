import { Injectable } from '@nestjs/common';
import { TodoList, TodoListModel } from '../schemas/todo-list.schema';
import { InjectModel } from '@nestjs/mongoose';
import { TodoItemService } from '../../todo-item/services/todo-item.service';
import { Types } from 'mongoose';
@Injectable()
export class TodoListService {
  constructor(
    @InjectModel(TodoList.name)
    private readonly todoListModel: TodoListModel,
    private readonly todoItemService: TodoItemService,
  ) {}

  async create(userId: string, todoListId: string) {
    await this.todoListModel.create({
      user: userId,
      id: new Types.ObjectId(userId),
    });
  }

  async delete(todoListId: string) {
    await this.todoItemService.deleteByTodoList(todoListId);
    await this.todoListModel.deleteOne({ _id: todoListId });
  }
}
