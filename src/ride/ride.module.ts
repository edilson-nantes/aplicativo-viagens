import { Module } from '@nestjs/common';
import { RideController } from './ride.controller';
import { RideService } from './ride.service';
import { GooglemapModule } from 'src/googlemap/googlemap.module';
import { DriverModule } from 'src/driver/driver.module';

@Module({
  imports: [GooglemapModule, DriverModule],
  controllers: [RideController],
  providers: [RideService]
})
export class RideModule {}
