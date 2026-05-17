export class Pedido {
    constructor(id, cliente, itens) {
        this.id = id;
        this.cliente = cliente;
        this.itens = itens; // Array de ItemPedido
        this.total = 0;
    }
}
import { Pedido } from './Pedido.js';
import { ItemPedido } from './ItemPedido.js';

export class PedidoFactory {
    static criar(cliente, listaItensRaw) {
        const itens = listaItensRaw.map(i => new ItemPedido(i.produto, i.quantidade));
        return new Pedido(Date.now(), cliente, itens);
    }
}