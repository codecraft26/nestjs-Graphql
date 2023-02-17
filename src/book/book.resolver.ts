import { Resolver,Query } from "@nestjs/graphql";
import { Book } from "./book.schema";
import {Book as BookModel } from "src/graphql";
@Resolver(of=>Book)
export class BookResolver{

    @Query(returns =>[Book],{name:'books'})
    getAllBooks(){

            
        //return book
        let arr:BookModel[]  = [
           {
            id:1,title:"aman",price:2627
           },
           {
            id:1,title:"hungarygame",price:2627
           },
           {
            id:1,title:"bebo",price:2627
           }
        ];
        return arr;
    }


}