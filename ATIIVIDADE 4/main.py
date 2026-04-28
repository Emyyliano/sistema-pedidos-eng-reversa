from models.produto import Produto
from services.pedido_whats import PedidoService
from views.interface_view import InterfaceView
from services.desconto import DescontoNatal

service = PedidoService()

view = InterfaceView()
service.anexar(view)

p1 = Produto(1, "Hambúrguer", 30.0)
service.adicionar_produto(p1, 2)

service.pedido_atual.calcular_total(DescontoNatal())
print(f"\nLink WhatsApp: {service.enviar_whatsapp()}")