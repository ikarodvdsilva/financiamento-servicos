import { Controller, Get, Query } from '@nestjs/common';
import { NbsService } from '../nbs/nbs.service'; 

@Controller('nbs')
export class NbsController {
  constructor(private readonly servicosService: NbsService) {} 

  @Get('proposta/servicos/4R')
  async getProposta4R(@Query('codFinanciadora') codFinanciadora: number) { 
    try {
      const response = await this.servicosService.fetchServicosCcv(codFinanciadora);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter os serviços:', error);
      throw error;
    }
  }

  @Get('proposta/servicos/2R')
  async getProposta2R(@Query('codFinanciadora') codFinanciadora: number) { 
    try {
      const response = await this.servicosService.fetchServicosNbs(codFinanciadora);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter os serviços:', error);
      throw error;
    }
  }
}
