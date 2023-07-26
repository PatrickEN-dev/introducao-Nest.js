import { CreateMusicDto } from "../dto/create-music.dto";
import { UpdateMusicDto } from "../dto/update-music.dto";
import { Music } from "../entities/music.entity";

export abstract class MusicsRepository {
  abstract create(data: CreateMusicDto): Promise<Music>;
  abstract findAll(): Promise<Music[]>;
  abstract findOne(id: string): Promise<Music>;
  abstract update(id: string, data: UpdateMusicDto): Promise<Music> | Music
  abstract delete(id: string): Promise<void> | void;
}