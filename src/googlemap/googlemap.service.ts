import { HttpService } from '@nestjs/axios';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';


@Injectable()
export class GooglemapService {
    private readonly apiUrl = process.env.GOOGLE_API_URL;
    private readonly apiKey = process.env.GOOGLE_API_KEY;
    
    constructor(
        private httpService: HttpService
    ) {}

    async calculateRoute(origin: string, destination: string) {
        
        const headers = {
            'X-Goog-Api-Key': this.apiKey,
            'X-Goog-FieldMask': 'routes.distanceMeters,routes.duration,routes.polyline.encodedPolyline,routes.legs.startLocation,routes.legs.endLocation',
            'Content-Type': 'application/json',
        };

        const body = {
            origin: { address: origin },
            destination: { address: destination },
            travelMode: 'DRIVE',
            routingPreference: 'TRAFFIC_AWARE',
            computeAlternativeRoutes: false,
            routeModifiers: {
              avoidTolls: false,
              avoidHighways: false,
              avoidFerries: false,
            },
            languageCode: 'pt-br',
            units: 'METRIC',
        };


        try {
            const response = await firstValueFrom(
                this.httpService.post(this.apiUrl, body, { headers }),
            );

            if (!response.data.routes || response.data.routes.length === 0) {
                throw new Error('Nenhuma rota encontrada.');
            }
        
            const firstRoute = response.data.routes[0];
            return firstRoute;
        } catch (error) {
            throw new HttpException(
                error.response?.data || 'Erro ao acessar a API do Google',
                error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }

    }
}
