import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { UsersModule } from './middlewares/users/users.module';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { ChannelsModule } from './channels/channels.module';
import { DmsModule } from './dms/dms.module';
import { UsersService } from './middlewares/users/users.service';
@Module({
  imports: [ConfigModule.forRoot(), UsersModule, WorkspacesModule, ChannelsModule, DmsModule],
  controllers: [AppController],
  providers: [AppService, UsersService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}