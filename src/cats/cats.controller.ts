import { Body, Controller, Delete, Get, Header, HttpCode, Param, Post, Put, Redirect, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './create-cat-dto';
import { UpdateCatDto } from './update-cat-dto';


@Controller('cats')
export class CatsController {
    @Get()
    findAll(@Req() request: Request): string {
        return 'Busca todos os gatos';
    }

    @Post()
    async create(@Body() CreateCatDto: CreateCatDto) {
        return 'Criar novo gato';
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
