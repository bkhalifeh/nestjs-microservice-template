import { Test, TestingModule } from '@nestjs/testing';
import { TodoItemController } from './todo-item.controller';
import { TodoItemService } from './todo-item.service';

describe('TodoItemController', () => {
  let todoItemController: TodoItemController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TodoItemController],
      providers: [TodoItemService],
    }).compile();

    todoItemController = app.get<TodoItemController>(TodoItemController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(todoItemController.getHello()).toBe('Hello World!');
    });
  });
});
