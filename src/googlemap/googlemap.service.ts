import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class GooglemapService {
    constructor(private httpService: HttpService) {}

    async calculateRoute(origin: string, destination: string) {
        
        const url = '';

        return this.httpService.get(url)
            .pipe(map(response => response.data));

    }
}
