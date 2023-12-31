import "dotenv/config";
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';


interface IPayLoad {
    sub: string;
    email: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoredExpiration: false,
            secretOrKey: process.env.SECRET_KEY,
        });
    }

    async validate(payload: IPayLoad) {
        return {id: payload.sub, email: payload.email};
    }
}