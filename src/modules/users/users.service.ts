import { Injectable, NotFoundException } from '@nestjs/common';
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
    const findUser = this.UserRepository.findone(id)
    if (!findUser) throw new NotFoundException("User not found")
    
    return findUser;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const findUser = this.UserRepository.findone(id)
    if (!findUser) throw new NotFoundException("User not found")
    return this.UserRepository.update(id, updateUserDto)
  }

  remove(id: string) {
    const findUser = this.UserRepository.findone(id)
    if (!findUser) throw new NotFoundException("User not found")
    return this.UserRepository.delete(id)
  }
}
