import { IsString, Matches, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  username: string;
  //   @MinLength(20)

  @IsString()
  @MinLength(8)
  password: string;
  //   @MinLength(20)
  //   @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
  //     message: 'password too weak',
  //   })
}
