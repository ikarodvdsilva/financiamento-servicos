import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; 
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NbsController } from './Controllers/nbs/nbs.controller';
import { NbsService } from './Controllers/nbs/nbs.service';

@Module({
  imports: [
    ConfigModule.forRoot(), 
  ],
  controllers: [AppController, NbsController],
  providers: [AppService, NbsService],
})
export class AppModule {}
