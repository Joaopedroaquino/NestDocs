import { Controller, Get, Header, HttpCode, Post, Redirect, Req } from '@nestjs/common';
import { Request } from 'express';


@Controller('cats')
export class CatsController {
    @Get()
    findAll(@Req() request: Request): string{
        return 'Busca todos os gatos';
    }

    @Post()
    // @Header('Cache-Control', 'none')
    // @HttpCode(204)
    create(): string {
        return 'Criar novo gato';
    }
  

}
