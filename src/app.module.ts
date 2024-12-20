import { Module } from '@nestjs/common';
import { RideModule } from './ride/ride.module';
import { DriverModule } from './driver/driver.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GooglemapModule } from './googlemap/googlemap.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      entities: [`${__dirname}/**/*.entity{.js,.ts}`],
      migrations: [`${__dirname}/migration/{.ts,*.js}`],
      migrationsRun: true
    }),
    RideModule,
    DriverModule,
    GooglemapModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
