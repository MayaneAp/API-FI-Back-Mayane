import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class LivrosMay {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    author: string

    @Column()
    year: number

}
