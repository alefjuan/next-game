import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar validação global
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Remove campos não definidos no DTO
    forbidNonWhitelisted: true, // Lança erro se campos não definidos forem enviados
    transform: true, // Transforma automaticamente os objetos no tipo correto
  }));

  await app.listen(3000);
}
bootstrap();
