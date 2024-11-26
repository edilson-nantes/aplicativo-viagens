import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DriverEntity } from './interfaces/driver.entity';
import { Repository } from 'typeorm';
import { CreateDriverDTO } from './dtos/createDriver.dto';

@Injectable()
export class DriverService {

    constructor (
        @InjectRepository(DriverEntity)
        private readonly driverRepository: Repository<DriverEntity>,
    ){};

    async createDriver(createDriverDTO: CreateDriverDTO): Promise<DriverEntity> {

        return this.driverRepository.save({
            ...createDriverDTO
        });
    };

    async getAllDrivers(): Promise<DriverEntity[]> {
        return this.driverRepository.find();
    }

}
