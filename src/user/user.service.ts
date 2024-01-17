import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/User';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
  constructor(
    private readonly configService: ConfigService,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async register(
    email: string,
    nickname: string,
    password: string,
  ): Promise<number> {
    if (!email) {
      throw new HttpException('이메일을 입력해주세요.', HttpStatus.BAD_REQUEST);
    }

    if (!nickname) {
      throw new HttpException('닉네임을 입력해주세요.', HttpStatus.BAD_REQUEST);
    }

    if (!password) {
      throw new HttpException(
        '비밀번호를 입력해주세요.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const duplicateUser = await this.userRepository.findOne({
      where: { email },
    });

    if (duplicateUser) {
      throw new HttpException('이미 가입된 사용자입니다.', HttpStatus.CONFLICT);
    }

    const passwordRounds = Number(
      this.configService.get('PASSWORD_ROUNDS', 12),
    );

    const hashedPassword = await bcrypt.hash(password, passwordRounds);

    const result = await this.userRepository.save({
      email,
      nickname,
      password: hashedPassword,
    });

    return result.id;
  }
}
