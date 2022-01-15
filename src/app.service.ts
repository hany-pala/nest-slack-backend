import { Injectable } from '@nestjs/common';
import { UsersService } from './middlewares/users/users.service';

@Injectable()
export class AppService {
  constructor(private usersService: UsersService) {}
  
  getHello(): string {
    this.usersService.getUsers();
    return process.env.SECRET;
    
  }
}
