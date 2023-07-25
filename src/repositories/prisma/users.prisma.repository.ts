import { CreateUserDto } from "src/modules/users/dto/create-user.dto";
import { UpdateUserDto } from "src/modules/users/dto/update-user.dto";
import { User } from "src/modules/users/entities/user.entity";
import { UserRepository } from "../users.repository";
import { PrismaService } from "src/database/prisma.service";
import { plainToInstance } from "class-transformer";

export class UsersPrismaRepository implements UserRepository {
    constructor(private prisma: PrismaService) {}

    async create(data: CreateUserDto): Promise<User> {
      const user = new User()
      Object.assign(user, {...data})

      const newUser = await this.prisma.user.create({data: {...user}})

      return plainToInstance(User, newUser)
    }

    async findAll(): Promise<User[]> {
        const users: User[] = await this.prisma.user.findMany();
        return plainToInstance(User, users)
    }

    async findone(id: string): Promise<User> {
       const user = await this.prisma.user.findUnique({ where: { id } })
       return plainToInstance(User, user)
    }

    async update(id: string, data: UpdateUserDto): Promise<User> {
       const user = await this.prisma.user.update({
        where: { id },
        data: { ...data },
       })
       
       return plainToInstance(User, user)
    }
    
    async delete(id: string): Promise<void> {
        await this.prisma.user.delete({where: { id }})
    }
}