import { Module } from '@nestjs/common';
import { TodoListController } from './controllers/todo-list.controller';
import { TodoListService } from './services/todo-list.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoListModelDefinition } from './schemas/todo-list.schema';
import { jwtModule, UtilModule } from '@app/shared';

@Module({
  imports: [
    MongooseModule.forFeature([TodoListModelDefinition]),
    jwtModule,
    UtilModule,
  ],
  controllers: [TodoListController],
  providers: [TodoListService],
})
export class TodoListModule {}
