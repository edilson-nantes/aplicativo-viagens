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
            throw new BadRequestException('Os dados fornecidos no corpo da requisição são inválidos');
          }

        try {
            const route = await this.googleMapsService.calculateRoute(
              createRideDTO.origin,
              createRideDTO.destination,
            );

            const drivers = await this.driverService.getDriverByDistance(route.distanceMeters);
      
            var options = [];
            drivers.forEach((driver) => {
                var value = (route.distanceMeters/1000) * driver.value;
                options.push({
                    
                    id: driver.id,
                    name: driver.name,
                    description: driver.description,
                    vehicle: driver.car,
                    review: {
                        review: driver.review
                    },
                    value: value
                });
            });

            const data = {
                origin: route.legs[0].startLocation.latLng,
                destination: route.legs[0].endLocation.latLng,
                distance: route.distanceMeters,
                duration: route.duration,
                options: options.sort((a, b) => a.value - b.value),
                routeResponse: route
            }
            
            return {
                message: "Operação realizada com sucesso",
                data
            };

          } catch (error) {
                throw new BadRequestException(
                    'Os dados fornecidos no corpo da requisição são inválidos',
                );
          }
        
    };
}
