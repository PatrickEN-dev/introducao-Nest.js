import { PrismaService } from 'src/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { MusicsRepository } from '../musics.repository';
import { CreateMusicDto } from '../../dto/create-music.dto';
import { Music } from '../../entities/music.entity';
import { plainToInstance } from 'class-transformer';
import { UpdateMusicDto } from '../../dto/update-music.dto';

@Injectable()
export class MusicsPrismaRepository implements MusicsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateMusicDto): Promise<Music> {
    const music = new Music()
    Object.assign(music, {...data})

    const newMusic = await this.prisma.music.create({data: {...music}})

    return plainToInstance(Music, newMusic)
  }

  async findAll(): Promise<Music[]> {
      const musics: Music[] = await this.prisma.music.findMany();
      return plainToInstance(Music, musics)
  }

  async findOne(id: string): Promise<Music> {
    const music = await this.prisma.music.findFirst({
      where: { id },
    });
    return music;
  }

  async update(id: string, data: UpdateMusicDto): Promise<Music> {
     const music = await this.prisma.music.update({
      where: { id },
      data: { ...data },
     })
     
     return plainToInstance(Music, music)
  }
  
  async delete(id: string): Promise<void> {
      await this.prisma.music.delete({where: { id }})
  }
}