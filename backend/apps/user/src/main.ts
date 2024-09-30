import { appInit, createOnListen } from '@app/shared';
import { AppModule } from './modules/app/app.module';

async function bootstrap() {
  const { app, logger } = await appInit(AppModule);
  await app.startAllMicroservices();
  await app.listen(3000, '0.0.0.0', createOnListen(logger));
}
bootstrap();
