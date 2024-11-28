import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'ride' })
export class RideEntity{
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column()
    customer_id: string;

    @Column()
    origin: string;

    @Column()
    destination: string;

    @Column()
    distance: number;

    @Column()
    duration: string;

    @Column()
    driver: number;

    @Column()
    value: number;
}