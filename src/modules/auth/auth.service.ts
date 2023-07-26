import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService) {}

   async validateUser(email: string, password: string) {
        const user = await this.userService.findByEmail(email);
        if (user && user.password === password) {
            const {id, email} = user
            return {id, email}
        }
        return null;
    }

    async login(user: User) {
        const payload = {email: user.email, sub: user.id};
        return {token: this.jwtService.sign(payload)}
    }
}