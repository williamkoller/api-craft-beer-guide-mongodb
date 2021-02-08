import { IsNotEmpty, IsString } from 'class-validator';

export class AddStyleDto {
  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  name: string;
}
