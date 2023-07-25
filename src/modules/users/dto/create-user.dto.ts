import { hashSync } from "bcryptjs"
import { Transform } from "class-transformer"
import { IsString, IsEmail, IsNotEmpty, MinLength } from "class-validator"

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @Transform(({value}: {value: string}) => hashSync(value), {
        groups: ["transform"]
    })
    password: string
}
