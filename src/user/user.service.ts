import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  register(email: string, nickname: string, password: string) {
    return `${email} ${nickname} ${password}`;
  }
}
