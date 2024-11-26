import { Module } from '@nestjs/common';
import { DriverController } from './driver.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverEntity } from './interfaces/driver.entity';
import { DriverService } from './driver.service';

@Module({
  imports: [TypeOrmModule.forFeature([DriverEntity])],
  controllers: [DriverController],
  providers: [DriverService]
})
export class DriverModule {}
