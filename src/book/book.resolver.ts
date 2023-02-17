import { Resolver,Query } from "@nestjs/graphql";
@Resolver("Book")
export class BookResolver{

    @Query("books")
    getAllBooks(){
        //return book
        return [
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
    }


}