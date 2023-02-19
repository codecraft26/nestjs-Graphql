import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppResolver } from './app.resolver';

@Module({
  imports: [

    GraphQLModule.forRoot({
      driver:ApolloDriver,
      playground:true,
autoSchemaFile:join(process.cwd(),"src/schema.graphql")
      // typePaths:["./**/*.graphql"]
        ,
        definitions:{
path:join(process.cwd(),'src/graphql.ts')
        }
    }),


   
   
  ],
  controllers: [],
  providers: [AppResolver],
})
export class AppModule {}
