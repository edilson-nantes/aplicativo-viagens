import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class ConfirmRideDTO {
    @IsString()
    @IsNotEmpty()
    customer_id: string;

    @IsString()
    @IsNotEmpty()
    origin: string;

    @IsString()
    @IsNotEmpty()
    destination: string;

    @IsNumber()
    @IsNotEmpty()
    distance: number;

    @IsString()
    @IsNotEmpty()
    duration: string;

    @IsNotEmpty()
    driver: number;

    @IsNumber()
    @IsNotEmpty()
    value: number;
}