import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserRepository } from 'src/modules/users/repositories/users.repository';
import { PrismaService } from 'src/database/prisma.service';
import { UsersPrismaRepository } from 'src/modules/users/repositories/prisma/users.prisma.repository';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService,
    {provide: UserRepository, useClass: UsersPrismaRepository},
  ],
  exports: [UsersService]
})
export class UsersModule {}
