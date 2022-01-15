/**
 * nest convention
 * export default 대신에 export 사용하기
 * interface 보다는 class로 사용
 * code convention은 - 보다는 . 사용
 */
export class JoinRequestDto {
  public email: string;
  public nickname: string;
  public password: string;
}