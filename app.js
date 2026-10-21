import * as maquinaCtrl from "./controller/maquinaController.js";
import * as operadorCtrl from "./controller/operadorController.js";
import * as opCtrl from "./controller/ordemProducaoController.js";

maquinaCtrl.cadastrar("M01", "Prensa Hidráulica", "Estampagem");
maquinaCtrl.cadastrar("M02", "Torno CNC", "Usinagem");

operadorCtrl.cadastrar("OP101", "Carlos Silva", "Operador de Máquinas", "Manhã");
operadorCtrl.cadastrar("OP102", "Ana Souza", "Técnica de Produção", "Tarde");

opCtrl.cadastrar("OP-2026-01", "Suporte Metálico", 150, "30/10/2026");
opCtrl.cadastrar("OP-2026-02", "Eixo de Aço", 80, "05/11/2026");

maquinaCtrl.listar();
operadorCtrl.listar();
opCtrl.listar();

maquinaCtrl.buscarPorIndice(0);
operadorCtrl.buscarPorIndice(1);
opCtrl.buscarPorIndice(0);

maquinaCtrl.ligarMaquina(0);

operadorCtrl.desativarOperador(1);

opCtrl.iniciarOrdem(0);
opCtrl.concluirOrdem(0);

maquinaCtrl.atualizar(1, "M02-REV", "Torno CNC Avançado", "Usinagem Pesada");
operadorCtrl.atualizar(0, "OP101", "Carlos Silva Junior", "Supervisor de Turno", "Integral");
opCtrl.atualizar(1, "OP-2026-02", "Eixo de Aço Reforçado", 120, "10/11/2026");

maquinaCtrl.excluir(1);
operadorCtrl.excluir(1);
opCtrl.excluir(1);

maquinaCtrl.listar();
operadorCtrl.listar();
opCtrl.listar();