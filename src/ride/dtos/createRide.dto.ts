import { IsString, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateRideDTO {
  @IsString()
  @IsNotEmpty()
  customer_id: string;

  @IsString()
  @IsNotEmpty()
  origin: string;

  @IsString()
  @IsNotEmpty()
  destination: string;
}