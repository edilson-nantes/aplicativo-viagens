import { Body, Controller, Get, Post } from '@nestjs/common';
import { DriverService } from './driver.service';
import { DriverEntity } from './interfaces/driver.entity';
import { CreateDriverDTO } from './dtos/createDriver.dto';

@Controller('driver')
export class DriverController {

    constructor(private readonly driverService: DriverService) {};


    @Get()
    async getAllDrivers(): Promise<DriverEntity[]> {
        return this.driverService.getAllDrivers();
    }

    @Post()
    async createUser(@Body() createDriver:CreateDriverDTO): Promise<DriverEntity> {
        return this.driverService.createDriver(createDriver);
    }
}
