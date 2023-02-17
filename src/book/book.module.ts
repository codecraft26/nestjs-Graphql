import { Module } from '@nestjs/common';
import { BookResolver } from './book.resolver';
// module for book mosule
@Module({
  imports: [

  ],
  controllers: [],
  providers: [BookResolver],
})
export class BookModule {}
