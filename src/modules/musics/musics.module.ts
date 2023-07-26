import { Module } from '@nestjs/common';
import { MusicsController } from './musics.controller';
import { MusicsService } from './musics.service';
import { PrismaService } from 'src/database/prisma.service';
import { MusicsPrismaRepository } from './repositories/prisma/musics.prisma.repository';
import { MusicsRepository } from './repositories/musics.repository';

@Module({
  controllers: [MusicsController],
  providers: [
    MusicsService,
    PrismaService,
    {
      provide: MusicsRepository,
      useClass: MusicsPrismaRepository,
    },
  ],
})
export class MusicsModule {}
