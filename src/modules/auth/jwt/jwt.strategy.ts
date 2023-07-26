import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import "dotenv/config"


interface IPayLoad {
    sub: string;
    email: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            JwtFromrequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoredExpiration: false,
            secret0rkey: process.env.SECRET_KEY ,
        });
    }

    async validate(payload: IPayLoad) {
        return {id: payload.sub, email: payload.email};
    }
}