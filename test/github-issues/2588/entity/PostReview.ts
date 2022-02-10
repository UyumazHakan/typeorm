import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "../../../../src";
import {Post} from "./Post";


@Entity()
export class PostReview {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rating: number;

    @Column()
    comment: string;

    @ManyToOne(type => Post)
    post: Post;
}
