import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from 'src/repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private UserRepository: UserRepository) {}

  create(createUserDto: CreateUserDto) {
    return this.UserRepository.create(createUserDto)
  }

  findAll() {
    return this.UserRepository.findAll()
  }

  findOne(id: string) {
    return this.UserRepository.findone(id)
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.UserRepository.update(id, updateUserDto)
  }

  remove(id: string) {
    return this.UserRepository.delete(id)
  }
}
