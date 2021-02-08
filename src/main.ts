import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT_SERVER, () =>
    console.log(
      `Server running on http://localhost:${process.env.PORT_SERVER}`,
    ),
  );
}
bootstrap();
