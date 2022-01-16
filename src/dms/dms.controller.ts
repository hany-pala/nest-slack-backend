import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiQuery, ApiTags, ApiParam } from '@nestjs/swagger';

@ApiTags('DM')
@Controller('api/workspaces/:url/dms')
export class DmsController {
  @ApiQuery({
    name: 'perPage',
    required: true,
    description: '한 번에 가져오는 개수',
  })
  @ApiQuery({
    name: 'page',
    required: true,
    description: '불러 올 페이지',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: '사용자 아이디',
  })
  @Get(':id/chats')
  getChat(@Query('perPage') perPage, @Query('page') page, @Param() param) {
    console.log(param.id, param.url);
    console.log(perPage, page);
  }

  @Post(':id/chats')
  postChat(@Body() body) {}
}
