import { OrdemProducao } from "../model/OrdemProducao.js";
import { 
  cadastrarOrdemProducao, 
  listarOrdensProducao, 
  buscarOrdemProducaoPorIndice, 
  atualizarOrdemProducao, 
  excluirOrdemProducao 
} from "../repository/ordemProducaoRepository.js";

export function cadastrar(numero, produto, quantidade, prazo) {
  const ordem = new OrdemProducao(numero, produto, quantidade, prazo);
  cadastrarOrdemProducao(ordem);
}

export function listar() {
  const ordens = listarOrdensProducao();
  console.log("\n--- LISTA DE ORDENS DE PRODUÇÃO ---");
  for (let i = 0; i < ordens.length; i++) {
    const op = ordens[i];
    console.log(`[Índice ${i}] Número: ${op.numero} | Produto: ${op.produto} | Qtd: ${op.quantidade} | Prazo: ${op.prazo} | Status: ${op.status}`);
  }
}

export function buscarPorIndice(indice) {
  const ordem = buscarOrdemProducaoPorIndice(indice);
  if (!ordem) {
    console.log(`[OrdemProducao] Índice ${indice} não encontrado.`);
    return null;
  }
  console.log(`[Ordem de Produção Encontrada] Índice ${indice}:`, ordem, `| Status: ${ordem.status}`);
  return ordem;
}

export function atualizar(indice, numero, produto, quantidade, prazo) {
  const ordemExistente = buscarOrdemProducaoPorIndice(indice);
  if (!ordemExistente) {
    console.log(`[OrdemProducao] Impossível atualizar. Índice ${indice} não existe.`);
    return;
  }
  const novaOrdem = new OrdemProducao(numero, produto, quantidade, prazo);
  atualizarOrdemProducao(indice, novaOrdem);
}

export function excluir(indice) {
  const ordemExistente = buscarOrdemProducaoPorIndice(indice);
  if (!ordemExistente) {
    console.log(`[OrdemProducao] Impossível excluir. Índice ${indice} não existe.`);
    return;
  }
  excluirOrdemProducao(indice);
}

export function iniciarOrdem(indice) {
  const ordem = buscarOrdemProducaoPorIndice(indice);
  if (!ordem) {
    console.log(`[OrdemProducao] Índice ${indice} não encontrado para iniciar.`);
    return;
  }
  ordem.iniciar();
}

export function concluirOrdem(indice) {
  const ordem = buscarOrdemProducaoPorIndice(indice);
  if (!ordem) {
    console.log(`[OrdemProducao] Índice ${indice} não encontrado para concluir.`);
    return;
  }
  ordem.concluir();
}