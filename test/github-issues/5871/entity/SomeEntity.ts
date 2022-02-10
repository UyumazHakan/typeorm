import {Column, Entity, PrimaryGeneratedColumn} from "../../../../src";

enum Test {
    TEST1 = 'testing (brackets)',
    TEST2 = 'testing (brackers too)',
}

@Entity()
export class SomeEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "enum", enum: Test })
    test: Test;
}
