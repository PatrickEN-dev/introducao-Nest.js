import { ApiProperty } from "@nestjs/swagger"
import { hashSync } from "bcryptjs"
import { Transform } from "class-transformer"
import { IsString, IsEmail, IsNotEmpty, MinLength } from "class-validator"

export class CreateUserDto {
    @ApiProperty({example: "Patrick"})
    @IsString()
    @IsNotEmpty()
    name: string

    @ApiProperty({example: "patrick@mail.com"})
    @IsEmail()
    @IsNotEmpty()
    email: string

    @ApiProperty({
        description: "A senha deve conter no mínimo 4 caracteres e deve ser uma string",
        example: "secretpass"
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @Transform(({value}: {value: string}) => hashSync(value), {
        groups: ["transform"]
    })
    password: string
}
