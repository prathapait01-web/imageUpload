import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://prathaps:prathapS@cluster0.ubtaawq.mongodb.net/crud-oper'), // ✅
    ProductsModule,
  ],
})
export class AppModule {}