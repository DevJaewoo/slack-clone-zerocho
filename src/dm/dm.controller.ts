import { Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('DMS')
@Controller('api/workspaces/:workspace/dms')
export class DmController {
  @Get()
  @ApiOperation({ summary: '워크스페이스 DM 모두 가져오기' })
  getWorkspaceDMs() {}

  @Get(':id/chats')
  @ApiOperation({ summary: '워크스페이스 특정 DM 채팅 모두 가져오기' })
  getChats() {}

  @Get(':id/unreads')
  @ApiOperation({ summary: '안 읽은 DM 수 가져오기' })
  getUnreads() {}

  @Post(':id/chats')
  @ApiOperation({ summary: '워크스페이스 특정 DM 채팅 생성하기' })
  postChat() {}

  @Post(':id/images')
  @ApiOperation({ summary: '워크스페이스 특정 DM 이미지 업로드하기' })
  uploadImage() {}
}
