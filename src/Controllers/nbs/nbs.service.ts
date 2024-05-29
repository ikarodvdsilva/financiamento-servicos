import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService  } from '@nestjs/config';

@Injectable()
export class NbsService {
    constructor(private readonly configService: ConfigService) {}
    
    async fetchServicosCcv(codFinanciadora: number){
        try {
            const baseUrl = this.configService.get<string>('BASE_URL');
            const url = `${baseUrl}:9091/plugin-cometa/proposta/servicos?codFinanciadora=${codFinanciadora}`;
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error('Erro ao fazer a requisição:', error);
            throw error;
        }
    }
    
    
    async fetchServicosNbs(codFinanciadora: number){
        try {
            const baseUrl = this.configService.get<string>('BASE_URL');
            const url = `${baseUrl}:9090/plugin-cometa/proposta/servicos?codFinanciadora=${codFinanciadora}`;
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error('Erro ao fazer a requisição:', error);
            throw error;
        }
    }
}
