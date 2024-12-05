import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('NextGame API')
    .setDescription('API para gerenciamento de jogos e progresso.')
    .setVersion('1.0')
    .addBearerAuth() // caso utilize autenticação
    .build();

  // Criação do documento Swagger
  const document = SwaggerModule.createDocument(app, config);

  // Configuração da rota Swagger
  SwaggerModule.setup('api', app, document);

  // Inicia o servidor na porta 4000
  await app.listen(4000);
}
bootstrap();
