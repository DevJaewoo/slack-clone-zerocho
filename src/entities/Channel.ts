import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ChannelChat } from './ChannelChat';
import { ChannelMember } from './ChannelMember';
import { User } from './User';
import { Workspace } from './Workspace';

@Index('WorkspaceId', ['WorkspaceId'], {})
@Entity({ schema: 'sleact' })
export class Channel {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', length: 30 })
  name: string;

  @Column('tinyint', {
    name: 'private',
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  private: boolean | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column('int', { name: 'WorkspaceId', nullable: true })
  WorkspaceId: number | null;

  @OneToMany(() => ChannelChat, (channelChat) => channelChat.Channel)
  ChannelChats: ChannelChat[];

  @OneToMany(() => ChannelMember, (channelMember) => channelMember.Channel, {
    cascade: ['insert'],
  })
  ChannelMembers: ChannelMember[];

  @ManyToMany(() => User, (user) => user.Channels)
  Members: User[];

  @ManyToOne(() => Workspace, (workspace) => workspace.Channels, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'WorkspaceId', referencedColumnName: 'id' }])
  Workspace: Workspace;
}
