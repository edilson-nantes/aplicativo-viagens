import { Module } from '@nestjs/common';
import { GooglemapService } from './googlemap.service';

@Module({
  providers: [GooglemapService]
})
export class GooglemapModule {}
