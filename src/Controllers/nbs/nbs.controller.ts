import { Controller, Get, Param } from '@nestjs/common';
import { NbsService } from '../nbs/nbs.service'; 

@Controller('nbs')
export class NbsController {
  constructor(private readonly servicosService: NbsService) {} 
  @Get('proposta/servicos/4R/:codFinanciadora')
  async getProposta2R (@Param('codFinanciadora') codFinanciadora: number){ 
    try {
      const response = await this.servicosService.fetchServicosCcv(codFinanciadora);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter os serviços:', error);
      throw error;
    }
  }
  @Get('proposta/servicos/2R/:codFinanciadora')
  async getProposta4R (@Param('codFinanciadora') codFinanciadora: number){ 
    try {
      const response = await this.servicosService.fetchServicosNbs(codFinanciadora);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter os serviços:', error);
      throw error;
    }
  }
}
