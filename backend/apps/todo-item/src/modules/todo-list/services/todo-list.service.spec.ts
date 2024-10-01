import { Test, TestingModule } from '@nestjs/testing';
import { TodoListService } from './todo-list.service';
import { getModelToken } from '@nestjs/mongoose';
import { TodoItemService } from '../../todo-item/services/todo-item.service';
const todoListModelValue = {};
const todoItemServiceValue = {};
describe('TodoListService', () => {
  let service: TodoListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TodoListService,
        { provide: getModelToken('TodoList'), useValue: todoListModelValue },
        { provide: TodoItemService, useValue: todoItemServiceValue },
      ],
    }).compile();

    service = module.get<TodoListService>(TodoListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
