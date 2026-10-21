import  { maquinaController } from "./controller/maquinaController.js";
import  { operadorController } from "./controller/operadorController.js";
import  { ordemProducaoController } from "./controller/ordemProducaoController.js";

maquinaController.cadastrar("M01", "Prensa Hidráulica", "Estampagem");
maquinaController.cadastrar("M02", "Torno CNC", "Usinagem");

operadorController.cadastrar("OP101", "Carlos Silva", "Operador de Máquinas", "Manhã");
operadorController.cadastrar("OP102", "Ana Souza", "Técnica de Produção", "Tarde");

ordemProducaoController.cadastrar("OP-2026-01", "Suporte Metálico", 150, "30/10/2026");
ordemProducaoController.cadastrar("OP-2026-02", "Eixo de Aço", 80, "05/11/2026");

maquinaController.listar();
operadorController.listar();
ordemProducaoController.listar();

maquinaController.buscarPorIndice(0);
operadorController.buscarPorIndice(1);
ordemProducaoController.buscarPorIndice(0);

maquinaController.ligarMaquina(0);

operadorController.desativarOperador(1);

ordemProducaoController.iniciarOrdem(0);
ordemProducaoController.concluirOrdem(0);

maquinaController.atualizar(1, "M02-REV", "Torno CNC Avançado", "Usinagem Pesada");
operadorController.atualizar(0, "OP101", "Carlos Silva Junior", "Supervisor de Turno", "Integral");
ordemProducaoController.atualizar(1, "OP-2026-02", "Eixo de Aço Reforçado", 120, "10/11/2026");

maquinaController.excluir(1);
operadorController.excluir(1);
ordemProducaoController.excluir(1);

maquinaController.listar();
operadorController.listar();
ordemProducaoController.listar();