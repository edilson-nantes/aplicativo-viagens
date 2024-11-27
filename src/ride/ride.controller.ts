import { Body, Controller, Post } from '@nestjs/common';
import { RideService } from './ride.service';
import { CreateRideDTO } from './dtos/createRide.dto';

@Controller('ride')
export class RideController {

    constructor (private readonly rideService: RideService) {};

    @Post('estimate')
    async estimate(@Body() createRideDTO: CreateRideDTO){
        return this.rideService.estimate(createRideDTO);
    };
}
