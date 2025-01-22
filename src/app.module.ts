import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { GamesModule } from './games/games.module';
import { ListsModule } from './lists/lists.module';
import { PrismaService } from '../prisma/prisma.service';	
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [AuthModule, UsersModule, GamesModule, ListsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
