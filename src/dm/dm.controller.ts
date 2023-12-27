import { Controller, Get, Post } from '@nestjs/common';

@Controller('api/workspaces/:workspace/dms')
export class DmController {
  @Get(':id/chats')
  getChats() {}

  @Get(':id/unreads')
  getUnreads() {}

  @Post(':id/chats')
  postChat() {}

  @Post(':id/images')
  uploadImage() {}
}
