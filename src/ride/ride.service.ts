import { Injectable } from '@nestjs/common';
import { DriverService } from 'src/driver/driver.service';
import { GooglemapService } from 'src/googlemap/googlemap.service';
import { CreateRideDTO } from './dtos/createRide.dto';

@Injectable()
export class RideService {

    constructor(
        private readonly googleMapsService: GooglemapService,
        private readonly driverService: DriverService
    ) {};

    async estimate(createRideDTO: CreateRideDTO){
        
        if((createRideDTO.customer_id && createRideDTO.destination && createRideDTO.origin) && (createRideDTO.origin != createRideDTO.destination)){
            
            // Chamada para a Google Maps API
            const response = await this.googleMapsService.calculateRoute(
                createRideDTO.origin,
                createRideDTO.destination,
            );
            
        };
        
    };
}
