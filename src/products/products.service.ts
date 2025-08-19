import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

  async create(dto: CreateProductDto & { imageUrl: string }) {
    const product = new this.productModel(dto);
    return await product.save();
  }

  async findAll() {
    return await this.productModel.find();
  }

  async findOne(id: string) {
    return await this.productModel.findById(id);
  }

  async update(id: string, dto: UpdateProductDto) {
    return await this.productModel.findByIdAndUpdate(id, dto, { new: true });
  }

  async remove(id: string) {
    return await this.productModel.findByIdAndDelete(id);
  }
}