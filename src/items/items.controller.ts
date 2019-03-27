import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { IItem } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}
    
    @Get()
    findAll(): IItem[] {
        return this.itemsService.findAll();
    }

    @Get(':id')
    findOne(@Param() param){
        return `Item: ${param.id}`
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto): string {
        return `Name: ${createItemDto.name}, Desc: ${createItemDto.description}`;
    }

    @Delete(':id')
    delete(@Param() param) {
        return `deleted ${param.id}`
    }

    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param() param): string {
        return `updated ${param.id} - name: ${updateItemDto.name}`;
    }
}
