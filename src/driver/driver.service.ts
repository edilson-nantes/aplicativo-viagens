import { BadRequestException, Injectable } from '@nestjs/common';
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

    async getDriverById(id: number): Promise<DriverEntity> {
        const driver = await this.driverRepository.findOne({ where: { id } });

        if (!driver) {
            throw new Error("Motorista não encontrado.");
        }

        return driver;
    }

    async getDriverByDistance(distanceMeters: number): Promise<DriverEntity[]> {
        try{
        
            const allDrivers = await this.getAllDrivers();

            var matchDrivers = allDrivers.filter((driver) => distanceMeters > driver.minimum*1000);

            return matchDrivers;
        }catch (error){

            throw new BadRequestException(
                'An error occurred while processing your request. Please ensure the input is valid and try again.',
            );
        };
        
    }

}
