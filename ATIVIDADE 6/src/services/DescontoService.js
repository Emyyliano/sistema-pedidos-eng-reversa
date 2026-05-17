const estrategiasDesconto = {
    'VIP': (total) => total * 0.8,   
    'COMUM': (total) => total * 0.95, 
    'NENHUM': (total) => total        
};

export class DescontoService {
    static aplicarDesconto(total, tipoCliente) {
        const estrategia = estrategiasDesconto[tipoCliente] || estrategiasDesconto['NENHUM'];
        return estrategia(total);
    }
}