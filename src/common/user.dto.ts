import { ApiProperty } from '@nestjs/swagger';
import { JoinRequestDto } from 'src/middlewares/users/dto/join.request.dto';

export class UserDto extends JoinRequestDto {
  @ApiProperty({
    required: true,
    example: 1,
    description: '아이디',
  })
  @ApiProperty({
    required: true,
    example: 'inspiration33@kakao.com',
    description: '이메일',
  })
  id: number;
  email: string;
}
