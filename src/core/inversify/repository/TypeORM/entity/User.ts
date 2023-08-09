import {Entity, Column, Index} from "typeorm"
import {RoleEnumT, UserDomain} from "../../../../entities";
import {Abstract} from "./Abstract";

@Entity()
export class User extends Abstract implements UserDomain  {

    @Column({length: 20})
    name: string;

    @Column({length: 20})
    surname: string;

    @Index({ unique: true })
    @Column({length: 60})
    email: string;


    @Column({length: 60})
    password: string;

    @Index({ unique: true })
    @Column({length: 13})
    phone_number: string;

    @Column({default: null})
    AVATAR: string;

    @Column({
        type: "enum",
        enum: RoleEnumT,
        default: RoleEnumT.USER,
    })
    Role: RoleEnumT | null;

}
