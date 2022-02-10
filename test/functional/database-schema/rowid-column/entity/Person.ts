import {Column, Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn} from "../../../../../src";

@Entity()
export class Person {

    @PrimaryGeneratedColumn("rowid")
    id: string;

    @PrimaryColumn()
    @Generated("rowid")
    id2: string;

    @PrimaryColumn({ generated: "rowid" })
    id3: string;

    @Column({ generated: "rowid" })
    id4: string;

}
