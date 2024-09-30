import { CreateTodoItemDto } from './create-todo-item.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateTodoItemDto extends PartialType(CreateTodoItemDto) {}
