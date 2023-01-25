import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { swaggerConfig } from './docs/swagger.config';

async function bootstrap() {
  const logger = new Logger('Main');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  swaggerConfig(app);

  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));

  const config = app.get<ConfigService>(ConfigService);
  const port = config.get<number>('PORT');

  await app.listen(port, () => logger.log(`Server listening at: ${port}`));
}
bootstrap();
