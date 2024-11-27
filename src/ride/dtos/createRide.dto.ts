import { IsString, IsNotEmpty } from 'class-validator';

export class CreateRideDTO {
  @IsString({ message: 'Customer ID must be a string' })
  @IsNotEmpty({ message: 'Customer ID is required' })
  customer_id: string;

  @IsString({ message: 'Origin must be a string' })
  @IsNotEmpty({ message: 'Origin is required' })
  origin: string;

  @IsString({ message: 'Destination must be a string' })
  @IsNotEmpty({ message: 'Destination is required' })
  destination: string;
}