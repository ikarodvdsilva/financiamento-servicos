interface IServicos {
    timestamp: string;
    sucess: boolean;
    message: string;
    totalRegistros: number;
    totalPaginas: number;
    paginaAtual: number;
    data: {
        codigo: number;
        descricao: string;
        codigoPlano: number;
        descricaoPlano: string;
        codigoCliente: number;
        meses: number;
        codigoFinanciadora: number;
        sequenciaAgente: number;
        tacVenda: number;
        coeficiente: number;
        retorno: number;
        ila: any; 
    }[];
}
