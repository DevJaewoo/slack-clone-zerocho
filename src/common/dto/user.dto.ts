import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({
    required: true,
    description: 'ID',
    example: 123,
  })
  public id: number;
}
