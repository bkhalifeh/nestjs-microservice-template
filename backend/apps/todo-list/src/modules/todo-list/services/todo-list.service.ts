import { Inject, Injectable, NotAcceptableException } from '@nestjs/common';
import { TodoList, TodoListModel } from '../schemas/todo-list.schema';
import { InjectModel } from '@nestjs/mongoose';
import { ClientNats } from '@nestjs/microservices';
import { CLIENT_NATS, pb } from '@app/shared';
import { SchemaTypes } from 'mongoose';

@Injectable()
export class TodoListService {
  constructor(
    @Inject(CLIENT_NATS)
    private readonly client: ClientNats,
    @InjectModel(TodoList.name)
    private readonly todoListModel: TodoListModel,
  ) {}

  async create(title: string, user: string) {
    const newTodoList = await this.todoListModel.create({ title, user });
    this.client
      .emit<any, pb.TodoListCreated>('TodoListCreated', {
        id: newTodoList.id,
        title,
        user,
      })
      .subscribe();
    return newTodoList;
  }

  async update(todoListId: string, title: string) {
    const resu = await this.todoListModel.updateOne(
      { _id: todoListId },
      { title },
    );
    if (resu.modifiedCount > 0) {
      return resu;
    }
    throw new NotAcceptableException('can not update todolist');
  }

  async delete(todoListId: string): Promise<any> {
    const resd = await this.todoListModel.deleteOne({ _id: todoListId });
    if (resd.deletedCount > 0) {
      this.client
        .emit<any, pb.TodoListDeleted>('TodoListDeleted', { id: todoListId })
        .subscribe();
      return resd;
    }
    throw new NotAcceptableException('can not delete todolist');
  }

  findByUser(user: string) {
    return this.todoListModel.find({ user });
  }

  findOne(user: string, todoListId: string) {
    return this.todoListModel.findOne({
      _id: todoListId,
      user,
    });
  }
}
