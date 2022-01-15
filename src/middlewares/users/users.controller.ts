import { Controller, Get, Post, Req, Res, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserDto } from 'src/common/user.dto';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';
@Controller('api/users')
export class UsersController {
  constructor(private userService: UsersService) {
  }
  
  @ApiOperation({ summary: '내 정보 조회' })
  @ApiResponse({
    type: UserDto,
    status:200,
    description: '성공'
  })
  @ApiResponse({
    status:500,
    description: '서버 에러'
  })
  @Get()
  getUsers(@Req() req) {
    return req.user;
  }
  @ApiOperation({ summary: '회원가입' })
  @Post()
  postUsers(@Body() data: JoinRequestDto) {
    this.userService.postUsers(data.email, data.nickname, data.password)
  }
  @ApiResponse({
    type: UserDto,
    status:200,
    description: '성공'
  })
  @Post('login')
  logIn() {
  }
  
  @Post('logout')
  logOut(@Req() req, @Res() res) {
    req.logOut();
    res.clearCookie('connect.sid', { httpOnly: true })
    res.send('ok');
  }
}
