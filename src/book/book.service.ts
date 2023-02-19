import { Injectable } from "@nestjs/common";
import { BookEntity } from "./entity/book.entity";

@Injectable()
export class BookService{
    public bookData:BookEntity[]=[];
    addBook(book:BookEntity):string{
        this.bookData.push(book)
        return "added successfully";

    }
    updateBook(id:number,updateBook:BookEntity):string{
        for(let x=0;x<this.bookData.length;x++){
            if(this.bookData[x].id==id){
                this.bookData[x]=updateBook
            }

        }
        return "book updated successfully"
    }

    findAllBooks():BookEntity[]{
        return this.bookData
    }
    deleteBook(id:number){
        this.bookData=this.bookData.filter((book)=>book.id!=id)
    }
}