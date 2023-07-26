import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';
import { MusicsRepository } from './repositories/musics.repository';

@Injectable()
export class MusicsService {
  constructor(private musicsRepository: MusicsRepository) {}
  async create(data: CreateMusicDto) {
    return await this.musicsRepository.create(data);
  }

  async findAll() {
    return await this.musicsRepository.findAll();
  }

  async findOne(id: string) {
    const music = await this.musicsRepository.findOne(id);
    if (!music) {
      throw new NotFoundException('Music not found');
    }
    return music;
  }

  update(id: string, updateMusicDto: UpdateMusicDto) {
    const findMusic = this.musicsRepository.findOne(id)
    if (!findMusic) throw new NotFoundException("Music not found")
    return this.musicsRepository.update(id, updateMusicDto)
  }

  remove(id: string) {
    const findMusic = this.musicsRepository.findOne(id)
    if (!findMusic) throw new NotFoundException("Music not found")
    return this.musicsRepository.delete(id)
  }
}
