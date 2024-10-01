import { Test, TestingModule } from '@nestjs/testing';
import { TodoListController } from './todo-list.controller';
import { TodoListService } from '../services/todo-list.service';
import { TodoList } from '../schemas/todo-list.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

const clientNatsValue = {};
const todoListModelValue = {};
const todoListServiceValue = {};
const jwtServiceValue = {};
const configServiceValue = {
  get: jest.fn().mockReturnValue('YmVoemFk'),
};

describe('TodoListController', () => {
  let todoListController: TodoListController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TodoListController],
      providers: [
        TodoListService,
        { provide: 'CLIENT_NATS', useValue: clientNatsValue },
        { provide: Model<TodoList>, useValue: todoListModelValue },
        { provide: TodoListService, useValue: todoListServiceValue },
        { provide: JwtService, useValue: jwtServiceValue },
        { provide: ConfigService, useValue: configServiceValue },
      ],
    }).compile();

    todoListController = app.get<TodoListController>(TodoListController);
  });

  it('should be defined', () => {
    expect(todoListController).toBeDefined();
  });
});
