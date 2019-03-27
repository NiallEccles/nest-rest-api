import { Injectable } from '@nestjs/common';
import { IItem } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item') private readonly itemModel: Model<IItem>) {

    }
    async findAll(): Promise<IItem[]>{
        return await this.itemModel.find();
    }

    async findOne(id: string): Promise<IItem> {
        return await this.itemModel.findOne({ _id: id });
    }
}
