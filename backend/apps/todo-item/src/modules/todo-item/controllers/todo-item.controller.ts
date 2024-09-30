import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { TodoItemService } from '../services/todo-item.service';
import { IsUserAuth } from '@app/shared';
import { CreateTodoItemDto } from '../dtos/create-todo-item.dto';
import { UpdateTodoItemDto } from '../dtos/update-todo-item.dto';

@Controller()
export class TodoItemController {
  constructor(private readonly todoItemService: TodoItemService) {}

  @UseGuards(IsUserAuth)
  @Post('todo-list/:todoListId/todo-item')
  handleCreate(
    @Req() req: any,
    @Param('todoListId') todoListId: string,
    @Body() body: CreateTodoItemDto,
  ) {
    return this.todoItemService.create(todoListId, req.user.id, body);
  }

  @UseGuards(IsUserAuth)
  @Get('todo-list/:todoListId/todo-item')
  handleFindAll(@Req() req: any, @Param('todoListId') todoListId: string) {
    return this.todoItemService.findByList(todoListId, req.user.id);
  }

  @UseGuards(IsUserAuth)
  @Get('todo-item/:todoItemId')
  handleFindOne(@Req() req: any, @Param('todoItemId') todoItemId: string) {
    return this.todoItemService.findOne(todoItemId, req.user.id);
  }

  @UseGuards(IsUserAuth)
  @Patch('todo-item/:todoItemId')
  handleUpdate(
    @Req() req: any,
    @Param('todoItemId') todoItemId: string,
    @Body() body: UpdateTodoItemDto,
  ) {
    return this.todoItemService.update(todoItemId, req.user.id, body);
  }

  @UseGuards(IsUserAuth)
  @Delete('todo-item/:todoItemId')
  handleDelete(@Param('todoItemId') todoItemId: string, @Req() req: any) {
    return this.todoItemService.delete(todoItemId, req.user.id);
  }
}
