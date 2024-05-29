import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('nbs')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
}