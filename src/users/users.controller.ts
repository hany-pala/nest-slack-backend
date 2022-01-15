import { Controller, Get, Post, Req, Res, Body } from '@nestjs/common';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';
@Controller('api/users')
export class UsersController {
  constructor(private userService: UsersService) {
  }
  
  @Get()
  getUsers(@Req() req) {
    return req.user;
  }
  
  @Post()
  postUsers(@Body() data: JoinRequestDto) {
    this.userService.postUsers(data.email, data.nickname, data.password)
  }
  
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
