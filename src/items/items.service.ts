import { Injectable } from '@nestjs/common';
import { IItem } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
    private readonly items: IItem[] = [
        {
            id: "1234567",
            name: "Item One",
            qty: 1,
            description: "This is Item One"
        },
        {
            id: "0987654321",
            name: "Item Two",
            qty: 2,
            description: "This is Item Two"
        }
    ];

    findAll(): IItem[]{
        return this.items;
    }
}
