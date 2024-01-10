import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { UserModule } from './user/user.module';
import { DmModule } from './dm/dm.module';
import { ChannelModule } from './channel/channel.module';
import { WorkspaceModule } from './workspace/workspace.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChannelChat } from './entities/ChannelChat';
import { ChannelMember } from './entities/ChannelMember';
import { Channel } from './entities/Channel';
import { DM } from './entities/DM';
import { Mention } from './entities/Mention';
import { User } from './entities/User';
import { WorkspaceMember } from './entities/WorkspaceMember';
import { Workspace } from './entities/Workspace';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    DmModule,
    ChannelModule,
    WorkspaceModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [
        ChannelChat,
        ChannelMember,
        Channel,
        DM,
        Mention,
        User,
        WorkspaceMember,
        Workspace,
      ],
      synchronize: false,
      logging: true,
      charset: 'utf8mb4',
      keepConnectionAlive: true, // Hot Reloading 시 Connection을 끊었다 다시 연결하는 현상 방지
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(AppController);
  }
}
