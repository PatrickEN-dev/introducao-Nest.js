import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserRepository } from 'src/repositories/users.repository';
import { UsersInMemoryRepository } from 'src/repositories/in-memory/users.in-memory.repository';

@Module({
  controllers: [UsersController],
  providers: [UsersService,
    {provide: UserRepository, useClass: UsersInMemoryRepository}
  ]
})
export class UsersModule {}
