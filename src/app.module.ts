import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { UserModule } from './user/user.module';
import { DmModule } from './dm/dm.module';
import { ChannelModule } from './channel/channel.module';
import { WorkspaceModule } from './workspace/workspace.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), UserModule, DmModule, ChannelModule, WorkspaceModule],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(AppController);
  }
}
