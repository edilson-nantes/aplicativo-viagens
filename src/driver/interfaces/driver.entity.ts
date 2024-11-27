import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'driver' })
export class DriverEntity{
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({name: 'name', nullable: false})
    name: string;

    @Column({name: 'description', nullable: false})
    description: string;

    @Column({name: 'car', nullable: false})
    car: string;

    @Column({name: 'review', nullable: false})
    review: string;

    @Column({name: 'value', nullable: false})
    value: number;

    @Column({name: 'minimum', nullable: false})
    minimum: number;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;
}