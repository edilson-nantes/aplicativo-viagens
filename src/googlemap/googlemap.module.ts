import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GooglemapService } from './googlemap.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
    }),
    HttpModule
  ],
  providers: [
    GooglemapService
  ],
  exports:[GooglemapService]
})
export class GooglemapModule {}
