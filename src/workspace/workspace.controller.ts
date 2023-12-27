import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('api/workspaces')
export class WorkspaceController {
  @Get()
  getMyWorkspaces() {}

  @Post()
  createWorkspace() {}

  @Get(':workspace/members')
  getAllWorkspaceMembers() {}

  @Post(':workspace/members')
  inviteWorkspaceMember() {}

  @Delete(':workspace/members/:id')
  kickWorkspaceMember() {}
}
