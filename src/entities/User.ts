import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ChannelChat } from './ChannelChat';
import { ChannelMember } from './ChannelMember';
import { Channel } from './Channel';
import { DM } from './DM';
import { Mention } from './Mention';
import { WorkspaceMember } from './WorkspaceMember';
import { Workspace } from './Workspace';

@Index('email', ['email'], { unique: true })
@Entity({ schema: 'sleact' })
export class User {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'email', unique: true, length: 50 })
  email: string;

  @Column('varchar', { name: 'nickname', length: 30 })
  nickname: string;

  @Column('varchar', { name: 'password', length: 100, select: false })
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;

  @OneToMany(() => ChannelChat, (channelChat) => channelChat.User)
  ChannelChats: ChannelChat[];

  @OneToMany(() => ChannelMember, (channelMember) => channelMember.User)
  ChannelMembers: ChannelMember[];

  @OneToMany(() => DM, (dm) => dm.Sender)
  SendedDMs: DM[];

  @OneToMany(() => DM, (dm) => dm.Receiver)
  ReceivedDMs: DM[];

  @OneToMany(() => Mention, (mentions) => mentions.Sender)
  SendedMentions: Mention[];

  @OneToMany(() => Mention, (mentions) => mentions.Receiver)
  ReceivedMentions: Mention[];

  @OneToMany(() => WorkspaceMember, (workspaceMember) => workspaceMember.User)
  WorkspaceMembers: WorkspaceMember[];

  @OneToMany(() => Workspace, (workspace) => workspace.Owner)
  OwnedWorkspaces: Workspace[];

  @ManyToMany(() => Workspace, (workspace) => workspace.Members)
  @JoinTable({
    name: 'workspace_member',
    joinColumn: {
      name: 'UserId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'WorkspaceId',
      referencedColumnName: 'id',
    },
  })
  Workspaces: Workspace[];

  @ManyToMany(() => Channel, (channel) => channel.Members)
  @JoinTable({
    name: 'channel_member',
    joinColumn: {
      name: 'UserId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'ChannelId',
      referencedColumnName: 'id',
    },
  })
  Channels: Channel[];
}
