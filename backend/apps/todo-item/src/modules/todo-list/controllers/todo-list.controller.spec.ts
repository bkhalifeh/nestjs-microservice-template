import { Test, TestingModule } from '@nestjs/testing';
import { TodoListController } from './todo-list.controller';
import { TodoListService } from '../services/todo-list.service';
const todoListServiceValue = {};
describe('TodoListController', () => {
  let controller: TodoListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoListController],
      providers: [{ provide: TodoListService, useValue: todoListServiceValue }],
    }).compile();

    controller = module.get<TodoListController>(TodoListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
