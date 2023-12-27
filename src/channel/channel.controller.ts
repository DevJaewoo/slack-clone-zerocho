import { Controller, Get, Post } from '@nestjs/common';

@Controller('api/workspaces/:workspace/channels')
export class ChannelController {
  @Get()
  getAllChannels() {}

  @Post()
  createChannel() {}

  @Get(':channel')
  getChannel() {}

  @Get('members')
  getMembers() {}

  @Post('members')
  inviteMember() {}

  @Get('chats')
  getChats() {}

  @Get('unreads')
  getUnreadChats() {}

  @Post('chats')
  postChat() {}

  @Post('images')
  uploadImage() {}
}
