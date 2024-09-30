import { Module } from '@nestjs/common';
import { TodoItemController } from './controllers/todo-item.controller';
import { TodoItemService } from './services/todo-item.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoItemModelDefinition } from './schemas/todo-item.schema';
import { jwtModule } from '@app/shared';

@Module({
  imports: [MongooseModule.forFeature([TodoItemModelDefinition]), jwtModule],
  controllers: [TodoItemController],
  providers: [TodoItemService],
  exports: [TodoItemService],
})
export class TodoItemModule {}
