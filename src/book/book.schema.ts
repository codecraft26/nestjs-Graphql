import { Field, Int, ObjectType } from "@nestjs/graphql";
import { type } from "os";

@ObjectType()
export class Book{
    @Field((type)=>Int)
    id:number;
    @Field()
    title:string
    @Field((type)=>Int)
    price:Number
}