import { CreateUserDto } from "src/modules/users/dto/create-user.dto";
import { UpdateUserDto } from "src/modules/users/dto/update-user.dto";
import { User } from "src/modules/users/entities/user.entity";
import { UserRepository } from "../users.repository";
import { users } from "src/database/db";

export class UsersInMemoryRepository implements UserRepository {
    create(data: CreateUserDto): User | Promise<User> {
      const newUser = new User()
      Object.assign(newUser, {...data})
      users.push(newUser)
      return newUser
    }

    findAll(): User[] | Promise<User[]> {
        return users
    }

    findone(id: string): User | Promise<User> {
       const user = users.find((user) => user.id === id);
       return user
    }

    update(id: string, data: UpdateUserDto): User | Promise<User> {
       const userIndex = users.findIndex((user) => user.id === id);
       users[userIndex] = {...users[userIndex], ...data};
       return users[userIndex]
    }
    
    delete(id: string): void | Promise<void> {
        const userIndex = users.findIndex((user) => user.id === id);
        users.splice(userIndex, 1)
    }
}