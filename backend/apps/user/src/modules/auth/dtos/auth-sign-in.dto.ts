import { tags } from 'typia';

export class AuthSignInDto {
  username!: string &
    tags.Pattern<'^(?=.{3,16}$)[a-zA-Z0-9](?!.*[_.]{2})[a-zA-Z0-9._]*[a-zA-Z0-9]$'>;
  password!: string;
}
