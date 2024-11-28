import { Module } from '@nestjs/common';
import { RideController } from './ride.controller';
import { RideService } from './ride.service';
import { GooglemapModule } from 'src/googlemap/googlemap.module';
import { DriverModule } from 'src/driver/driver.module';
import { RideEntity } from './interfaces/ride.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([RideEntity]),
    GooglemapModule,
    DriverModule],
  controllers: [RideController],
  providers: [RideService]
})
export class RideModule {}
