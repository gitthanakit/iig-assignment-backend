import { ApiProperty } from '@nestjs/swagger';

export class CreateLoginDto {
  
  username: string;
  password: string;
  fullname: string;
  lastname: string;

}
