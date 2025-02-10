import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // Inicia o servidor na porta 4000
    await app.listen(3000);
}

bootstrap();