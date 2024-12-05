import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { GamesModule } from './games/games.module';
import { AuthModule } from './games/auth/auth.module';

@Module({
  imports: [SharedModule, CoreModule, GamesModule,AuthModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
