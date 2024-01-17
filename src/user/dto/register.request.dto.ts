import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class RegisterRequestDto {
  @ApiProperty({
    required: true,
    description: '이메일',
    example: 'DevJaewoo@gmail.com',
  })
  @IsNotEmpty()
  @IsEmail()
  public email: string;

  @ApiProperty({
    required: true,
    description: '닉네임',
    example: 'DevJaewoo',
  })
  @IsNotEmpty()
  @IsString()
  public nickname: string;

  @ApiProperty({
    required: true,
    description: '비밀번호',
    example: 'password123',
  })
  @IsNotEmpty()
  @IsStrongPassword()
  public password: string;
}
