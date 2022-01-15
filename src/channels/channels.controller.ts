import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';

@Controller('api/wokrspaces/:url/channels')
export class ChannelsController {
  
  @Get()
  getChannels() {
    
  }
  
  @Post()
  createChannels() {
    
  }
  
  @Get(':name')
  getSpecificChannel() {
    
  }
  
  @Get(':name/members')
  getAllMembers() {
    
  }
  
  @Post(':name/members')
  inviteMembers() {
    
  }
  
  @Get(':name/chats')
  getChat(@Query('perPage') perPage, @Query('page') page, @Param() param) {
    console.log(param.id, param.url);
    console.log(perPage, page);
  }
  
  @Post(':id/chats')
  postChat(@Body() body) {
    
  }
}
