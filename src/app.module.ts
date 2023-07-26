import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { MusicsModule } from './modules/musics/musics.module';

@Module({imports: [UsersModule, AuthModule, MusicsModule]})
export class AppModule {}
