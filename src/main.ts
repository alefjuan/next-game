import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar validação global
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Remove campos não definidos no DTO
    forbidNonWhitelisted: true, // Lança erro se campos não definidos forem enviados
    transform: true, // Transforma automaticamente os objetos no tipo correto
  }));

  // Configurar Swagger
  const config = new DocumentBuilder()
    .setTitle('Next Game API')
    .setDescription('API para gerenciamento de jogos e listas')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
