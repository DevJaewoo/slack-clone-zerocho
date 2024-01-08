import { setSeederFactory } from 'typeorm-extension';
import { Users } from '../../entities/Users';

export default setSeederFactory(Users, (faker) => {
  const user = new Users();
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  user.email = faker.internet.email({ firstName, lastName });
  user.nickname = faker.internet.userName();
  user.password = faker.internet.password();

  return user;
});
