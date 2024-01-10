import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import { ChannelChat } from './src/entities/ChannelChat';
import { ChannelMember } from './src/entities/ChannelMember';
import { Channel } from './src/entities/Channel';
import { DM } from './src/entities/DM';
import { Mention } from './src/entities/Mention';
import { User } from './src/entities/User';
import { WorkspaceMember } from './src/entities/WorkspaceMember';
import { Workspace } from './src/entities/Workspace';

dotenv.config();

const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
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
  migrations: [__dirname + '/src/migrations/*.ts'],
  charset: 'utf8mb4_general_ci',
  synchronize: false,
  logging: true,
});

export default dataSource;
