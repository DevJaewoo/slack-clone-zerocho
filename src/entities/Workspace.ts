import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Channel } from './Channel';
import { DM } from './DM';
import { Mention } from './Mention';
import { WorkspaceMember } from './WorkspaceMember';
import { User } from './User';

@Index('name', ['name'], { unique: true })
@Index('url', ['url'], { unique: true })
@Index('OwnerId', ['OwnerId'], {})
@Entity({ schema: 'sleact' })
export class Workspace {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', unique: true, length: 30 })
  name: string;

  @Column('varchar', { name: 'url', unique: true, length: 30 })
  url: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;

  @Column('int', { name: 'OwnerId', nullable: true })
  OwnerId: number | null;

  @OneToMany(() => Channel, (channel) => channel.Workspace)
  Channels: Channel[];

  @OneToMany(() => DM, (dm) => dm.Workspace)
  DMs: DM[];

  @OneToMany(() => Mention, (mention) => mention.Workspace)
  Mentions: Mention[];

  @OneToMany(
    () => WorkspaceMember,
    (workspaceMember) => workspaceMember.Workspace,
    { cascade: ['insert'] },
  )
  WorkspaceMembers: WorkspaceMember[];

  @ManyToOne(() => User, (user) => user.Workspaces, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'OwnerId', referencedColumnName: 'id' }])
  Owner: User;

  @ManyToMany(() => User, (user) => user.Workspaces)
  Members: User[];
}
