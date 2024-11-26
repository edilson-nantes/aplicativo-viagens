import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'driver' })
export class DriverEntity{
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({name: 'nome', nullable: false})
    nome: string;

    @Column({name: 'descricao', nullable: false})
    descricao: string;

    @Column({name: 'carro', nullable: false})
    carro: string;

    @Column({name: 'avaliacao', nullable: false})
    avaliacao: string;

    @Column({name: 'taxa', nullable: false})
    taxa: number;

    @Column({name: 'minimo', nullable: false})
    minimo: number;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;
}