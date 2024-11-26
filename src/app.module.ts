import { Module } from '@nestjs/common';
import { RideModule } from './ride/ride.module';
import { DriverModule } from './driver/driver.module';

@Module({
  imports: [RideModule, DriverModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
