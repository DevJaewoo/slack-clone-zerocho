import { ApiProperty } from '@nestjs/swagger';

export class RegisterRequestDto {
  @ApiProperty({
    required: true,
    description: '이메일',
    example: 'DevJaewoo@gmail.com',
  })
  public email: string;

  @ApiProperty({
    required: true,
    description: '닉네임',
    example: 'DevJaewoo',
  })
  public nickname: string;

  @ApiProperty({
    required: true,
    description: '비밀번호',
    example: 'password123',
  })
  public password: string;
}
