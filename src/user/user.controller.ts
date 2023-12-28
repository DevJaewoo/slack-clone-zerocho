import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { User } from 'src/common/decorators/user.decorator';
import { UserDto } from 'src/common/dto/user.dto';
import { UserService } from './user.service';
import { RegisterRequestDto } from './dto/register.request.dto';

@ApiTags('USERS')
@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: '내 정보 조회' })
  @ApiResponse({
    description: 'Success',
    type: UserDto,
  })
  getUser(@User() user) {
    return user;
  }

  @Post()
  @ApiOperation({ summary: '회원가입' })
  register(@Body() data: RegisterRequestDto) {
    this.userService.register(data.email, data.nickname, data.password);
  }

  @Post('login')
  @ApiOperation({ summary: '로그인' })
  login(@User() user) {
    return user;
  }

  @Post('logout')
  @ApiOperation({ summary: '로그아웃' })
  logout(@Req() req: Request, @Res() res: Response) {
    req.logout((err) => err ?? console.error(err));
    res.clearCookie('connect.sid', { httpOnly: true });
    res.send('ok');
  }
}
