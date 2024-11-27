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
            const route = await this.googleMapsService.calculateRoute(
              createRideDTO.origin,
              createRideDTO.destination,
            );

            const drivers = await this.driverService.getDriverByDistance(route.routes[0].distanceMeters);
      
            return {
                origin: {},
                destination: {},
                distance: route.routes[0].distanceMeters,
                duration: route.routes[0].duration,
                options: drivers,
                routeResponse: route.routes[0]
        };

          } catch (error) {
             // Tratamento de erros e logging
                console.log('Os dados fornecidos no corpo da requisição são inválidos', error.message);
                throw new BadRequestException(
                    'Os dados fornecidos no corpo da requisição são inválidos',
                );
          }
        
    };
}
