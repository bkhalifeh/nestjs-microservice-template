import { Test, TestingModule } from '@nestjs/testing';
import { TodoItemController } from './todo-item.controller';
import { TodoItemService } from '../services/todo-item.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

const todoItemServiceValue = {};
const jwtServiceValue = {};
const configServiceValue = {
  get: jest.fn().mockReturnValue('YmVoemFk'),
};

describe('TodoItemController', () => {
  let todoItemController: TodoItemController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TodoItemController],
      providers: [
        { provide: TodoItemService, useValue: todoItemServiceValue },
        { provide: JwtService, useValue: jwtServiceValue },
        { provide: ConfigService, useValue: configServiceValue },
      ],
    }).compile();

    todoItemController = app.get<TodoItemController>(TodoItemController);
  });

  it('should be defined', () => {
    expect(todoItemController).toBeDefined();
  });
});
