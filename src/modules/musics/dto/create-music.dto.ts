import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateMusicDto {
  @ApiProperty({ example: "The Wall" })
  @IsString()
  name: string;

  @ApiProperty({ example: "The Wall" })
  @IsString()
  album: string;

  @ApiProperty({ example: "Pink Floyd" })
  @IsString()
  artist: string;

  @ApiProperty({ example: "rock" })
  @IsString()
  genre: string;

  @ApiProperty({ example: "1979" })
  @IsString()
  year: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: "https://example.com/cover.jpg" })
  cover_image: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: "https://example.com/music.mp3" })
  music_url: string | null;

  @IsString()
  @ApiProperty({ example: "user_id_here" })
  user_id: string;
}
