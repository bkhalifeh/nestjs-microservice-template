import { NestFactory } from '@nestjs/core';
import { TodoItemModule } from './todo-item.module';

async function bootstrap() {
  const app = await NestFactory.create(TodoItemModule);
  await app.listen(3000);
}
bootstrap();
