import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { RideService } from './ride.service';
import { CreateRideDTO } from './dtos/createRide.dto';

@Controller('ride')
export class RideController {

    constructor (private readonly rideService: RideService) {};

    @Post('estimate')
    @HttpCode(200)
    async estimate(@Body() createRideDTO: CreateRideDTO){
        return this.rideService.estimate(createRideDTO);
    };
}
