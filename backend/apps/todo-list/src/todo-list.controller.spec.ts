import { Test, TestingModule } from '@nestjs/testing';
import { TodoListController } from './todo-list.controller';
import { TodoListService } from './todo-list.service';

describe('TodoListController', () => {
  let todoListController: TodoListController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TodoListController],
      providers: [TodoListService],
    }).compile();

    todoListController = app.get<TodoListController>(TodoListController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(todoListController.getHello()).toBe('Hello World!');
    });
  });
});
