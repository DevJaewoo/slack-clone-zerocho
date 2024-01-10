import { setSeederFactory } from 'typeorm-extension';
import { User } from '../../entities/User';

export default setSeederFactory(User, (faker) => {
  const user = new User();
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  user.email = faker.internet.email({ firstName, lastName });
  user.nickname = faker.internet.userName();
  user.password = faker.internet.password();

  return user;
});
