import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove propriedades não declaradas no DTO
      forbidNonWhitelisted: true, // Retorna erro para propriedades não permitidas
      transform: true, // Converte os valores para os tipos esperados no DT
    }),
  );

  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
