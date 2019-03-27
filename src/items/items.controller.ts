import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
    @Get()
    findAll(): string {
        return 'Get all items';
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
