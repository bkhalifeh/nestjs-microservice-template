import { CommonModule, NatsModule } from '@app/shared';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from '../user/user.module';
import { TodoListModule } from '../todo-list/todo-list.module';
import { TodoItemModule } from '../todo-item/todo-item.module';

@Module({
  imports: [
    CommonModule,
    NatsModule,
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          uri: configService.get('DATABASE_URL_TODO_ITEM'),
        };
      },
    }),
    UserModule,
    TodoListModule,
    TodoItemModule,
  ],
})
export class AppModule {}
