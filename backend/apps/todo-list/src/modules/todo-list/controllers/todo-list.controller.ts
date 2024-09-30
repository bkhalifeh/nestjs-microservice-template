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
import { TodoListService } from '../services/todo-list.service';
import { IsUserAuth } from '@app/shared';
import { CreateTodoListDto } from '../dtos/create-todo-list.dto';
import { UpdateTodoListDto } from '../dtos/update-todo-list.dto';

@Controller('todo-list')
export class TodoListController {
  constructor(private readonly todoListService: TodoListService) {}

  @UseGuards(IsUserAuth)
  @Get()
  handleFindAll(@Req() req: any) {
    return this.todoListService.findByUser(req.user.id);
  }

  @UseGuards(IsUserAuth)
  @Get(':todoListId')
  handleFindOne(@Req() req: any, @Param('todoListId') todoListId: string) {
    return this.todoListService.findOne(req.user.id, todoListId);
  }

  @UseGuards(IsUserAuth)
  @Post()
  handleCreate(@Req() req: any, @Body() body: CreateTodoListDto) {
    return this.todoListService.create(body.title, req.user.id);
  }

  @UseGuards(IsUserAuth)
  @Patch(':todoListId')
  handleUpdate(
    @Param('todoListId') todoListId: string,
    @Body() body: UpdateTodoListDto,
  ) {
    return this.todoListService.update(todoListId, body.title);
  }

  @UseGuards(IsUserAuth)
  @Delete(':todoListId')
  handleDelete(@Param('todoListId') todoListId: string) {
    return this.todoListService.delete(todoListId);
  }
}
