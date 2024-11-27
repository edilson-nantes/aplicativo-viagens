import { BadRequestException, Injectable } from '@nestjs/common';
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
        
        if (createRideDTO.origin === createRideDTO.destination) {
            throw new BadRequestException('Origin and destination must be different');
          }

        try {
            // Chamada ao serviço do Google Maps
            const route = await this.googleMapsService.calculateRoute(
              createRideDTO.origin,
              createRideDTO.destination,
            );
      
            return {
              success: true,
              message: 'Route estimated successfully',
              data: route,
            };
          } catch (error) {
             // Tratamento de erros e logging
                console.log('Failed to estimate route', error.message);
                throw new BadRequestException(
                    'Failed to estimate the route. Please try again later.',
                );
          }
        
    };
}
