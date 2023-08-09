import {Column, PrimaryGeneratedColumn} from "typeorm";

export abstract class Abstract {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    CreatedAt: string

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)"} )
    UpdatedAt: string
}