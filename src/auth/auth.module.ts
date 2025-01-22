import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller'; // Adicione o AuthController
import { JwtStrategy } from './jwt.strategy';
import { PrismaModule } from 'prisma/prisma.module'; // Importe o PrismaModule

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'SECRET_KEY', // Substitua por uma variável de ambiente em produção
      signOptions: { expiresIn: '60m' },
    }),
    PrismaModule, // Adicione o PrismaModule aqui
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController], // Adicione o AuthController
  exports: [AuthService],
})
export class AuthModule {}
