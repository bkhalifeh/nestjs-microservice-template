import { Injectable, NotAcceptableException } from '@nestjs/common';
import { TodoItem, TodoItemModel } from '../schemas/todo-item.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTodoItemDto } from '../dtos/create-todo-item.dto';
import { UpdateTodoItemDto } from '../dtos/update-todo-item.dto';

@Injectable()
export class TodoItemService {
  constructor(
    @InjectModel(TodoItem.name)
    private readonly todoItemModel: TodoItemModel,
  ) {}

  deleteByTodoList(todoList: string): Promise<any> {
    return this.todoItemModel.deleteMany({ todoList });
  }

  async create(
    todoListId: string,
    userId: string,
    createTodoItemDto: CreateTodoItemDto,
  ) {
    try {
      const newTodoItem = await this.todoItemModel.create({
        todoList: todoListId,
        user: userId,
        ...createTodoItemDto,
      });
      return newTodoItem;
    } catch (e) {}
    throw new NotAcceptableException('can not create new todo item');
  }

  findByList(todoListId: string, userId: string) {
    return this.todoItemModel
      .find({ todoList: todoListId, user: userId })
      .sort({ priority: 1 });
  }

  findOne(todoItemId: string, userId: string) {
    return this.todoItemModel.findOne({ _id: todoItemId, user: userId });
  }

  delete(todoItemId: string, userId: string): Promise<any> {
    return this.todoItemModel.deleteOne({ _id: todoItemId, user: userId });
  }

  update(
    todoItemId: string,
    userId: string,
    updateTodoItemDto: UpdateTodoItemDto,
  ) {
    return this.todoItemModel.updateOne(
      { _id: todoItemId, user: userId },
      { ...updateTodoItemDto },
    );
  }
}
