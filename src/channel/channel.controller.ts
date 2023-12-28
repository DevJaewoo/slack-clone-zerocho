import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('CHANNELS')
@Controller('api/workspaces/:workspace/channels')
export class ChannelController {
  @Get()
  @ApiOperation({ summary: '워크스페이스 채널 모두 가져오기' })
  getAllChannels() {}

  @Post()
  @ApiOperation({ summary: '워크스페이스 채널 만들기' })
  createChannel() {}

  @Get(':channel')
  @ApiOperation({ summary: '워크스페이스 특정 채널 가져오기' })
  getChannel() {}

  @Get('members')
  @ApiOperation({ summary: '워크스페이스 채널 멤버 가져오기' })
  getMembers() {}

  @Post('members')
  @ApiOperation({ summary: '워크스페이스 채널 멤버 초대하기' })
  inviteMember() {}

  @Get('chats')
  @ApiOperation({ summary: '워크스페이스 특정 채널 채팅 모두 가져오기' })
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'test',
    example: 123,
  })
  @ApiParam({
    name: 'workspace',
    required: true,
    description: 'workspace',
    example: 'test',
  })
  getChats(
    @Param('workspace') workspace: string,
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
  ) {}

  @Get('unreads')
  @ApiOperation({ summary: '안 읽은 개수 가져오기' })
  getUnreadChats() {}

  @Post('chats')
  @ApiOperation({ summary: '워크스페이스 특정 채널 채팅 생성하기' })
  postChat() {}

  @Post('images')
  @ApiOperation({ summary: '워크스페이스 특정 채널 이미지 업로드하기' })
  uploadImage() {}
}
