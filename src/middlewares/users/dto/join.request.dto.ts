import { ApiProperty } from '@nestjs/swagger';

/**
 * nest convention
 * export default 대신에 export 사용하기
 * interface 보다는 class로 사용
 * code convention은 - 보다는 . 사용
 */
export class JoinRequestDto {
  @ApiProperty({
    example: 'inspiration33@kakao.com',
    description: '이메일',
    required: true,
  })
  public email: string;

  @ApiProperty({
    example: 'inspiration33',
    description: '아이디',
    required: true,
  })
  public nickname: string;

  @ApiProperty({
    example: 'nodejsbook',
    description: '비밀번호',
    required: true,
  })
  public password: string;
}
