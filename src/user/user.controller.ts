import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { UserService } from './user.service';
import { RegisterRequestDto } from './dto/register.request.dto';

@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(@Req() req: Request) {
    return req.user;
  }

  @Post()
  register(@Body() data: RegisterRequestDto) {
    this.userService.register(data.email, data.nickname, data.password);
  }

  @Post('login')
  login() {}

  @Post('logout')
  logout(@Req() req: Request, @Res() res: Response) {
    req.logout((err) => err ?? console.error(err));
    res.clearCookie('connect.sid', { httpOnly: true });
    res.send('ok');
  }
}
