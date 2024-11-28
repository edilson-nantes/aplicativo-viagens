import { Body, Controller, HttpCode, Patch, Post } from '@nestjs/common';
import { RideService } from './ride.service';
import { CreateRideDTO } from './dtos/createRide.dto';
import { ConfirmRideDTO } from './dtos/confirmRide.dto';

@Controller('ride')
export class RideController {

    constructor (private readonly rideService: RideService) {};

    @Post('estimate')
    @HttpCode(200)
    async estimate(@Body() createRideDTO: CreateRideDTO){
        return this.rideService.estimate(createRideDTO);
    };

    @Patch('confirm')
    @HttpCode(200)
    async confirm(@Body() confirmRideDTO: ConfirmRideDTO){
        return this.rideService.confirm(confirmRideDTO);
    }
}
