import { IsString, IsNotEmpty } from 'class-validator';

export class CreateRideDTO {
  @IsString({ message: 'Os dados fornecidos no corpo da requisição são inválidos' })
  @IsNotEmpty({ message: 'Os dados fornecidos no corpo da requisição são inválidos' })
  customer_id: string;

  @IsString({ message: 'Os dados fornecidos no corpo da requisição são inválidos' })
  @IsNotEmpty({ message: 'Os dados fornecidos no corpo da requisição são inválidos' })
  origin: string;

  @IsString({ message: 'Os dados fornecidos no corpo da requisição são inválidos' })
  @IsNotEmpty({ message: 'Os dados fornecidos no corpo da requisição são inválidos' })
  destination: string;
}