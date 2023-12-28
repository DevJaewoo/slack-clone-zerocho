import { Controller, Delete, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('WORKSPACES')
@Controller('api/workspaces')
export class WorkspaceController {
  @Get()
  @ApiOperation({ summary: '내 워크스페이스 가져오기' })
  getMyWorkspaces() {}

  @Post()
  @ApiOperation({ summary: '워크스페이스 만들기' })
  createWorkspace() {}

  @Get(':workspace/members')
  @ApiOperation({ summary: '워크스페이스 멤버 가져오기' })
  getAllWorkspaceMembers() {}

  @Post(':workspace/members')
  @ApiOperation({ summary: '워크스페이스 멤버 초대하기' })
  inviteWorkspaceMember() {}

  @ApiOperation({ summary: '워크스페이스 특정멤버 가져오기' })
  @Delete(':workspace/members/:id')
  kickWorkspaceMember() {}
}
