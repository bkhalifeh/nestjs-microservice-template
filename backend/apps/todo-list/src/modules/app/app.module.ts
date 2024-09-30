import { CommonModule, NatsModule } from '@app/shared';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoListModule } from '../todo-list/todo-list.module';

@Module({
  imports: [
    CommonModule,
    NatsModule,
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          uri: configService.get('DATABASE_URL_USER'),
        };
      },
    }),
    TodoListModule,
  ],
})
export class AppModule {}
