import { Body, Controller, Delete, Get, Header, HttpCode, Param, Post, Put, Redirect, Req } from '@nestjs/common';
import { Request } from 'express';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat-dto';
import { Cat } from './interfaces/cat.interface';
import { UpdateCatDto } from './dto/update-cat-dto';


@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Get()
    async findAll(): Promise<Cat[]> {
       return this.catsService.findAll();
    }

    @Post()
    async create(@Body() CreateCatDto: CreateCatDto) {
        this.catsService.create(CreateCatDto);
    }

    @Get(':id')
    findOne(@Param() params): string {
        console.log(params.id);
        return `Retorna #${params.id} gato`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto){
        return `Atualiza o #${id} gato`;
    
    }

    @Delete(':id')
    remove(@Param('id') id:string){
        return `Deleta o #${id} gato`;
    }


}
