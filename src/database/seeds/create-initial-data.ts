import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Workspace } from '../../entities/Workspace';
import { Channel } from '../../entities/Channel';
import { User } from '../../entities/User';

export default class UserSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const workspacesRepository = dataSource.getRepository(Workspace);
    await workspacesRepository.insert([
      {
        id: 1,
        name: 'Sleact',
        url: 'sleact',
      },
    ]);
    const channelsRepository = dataSource.getRepository(Channel);
    await channelsRepository.insert([
      {
        id: 1,
        name: '일반',
        WorkspaceId: 1,
        private: false,
      },
    ]);

    await factoryManager.get(User).saveMany(5);
  }
}
