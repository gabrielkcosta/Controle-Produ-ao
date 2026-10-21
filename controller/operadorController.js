import { Operador } from "../model/Operador.js";
import { 
  cadastrarOperador, 
  listarOperadores, 
  buscarOperadorPorIndice, 
  atualizarOperador, 
  excluirOperador 
} from "../repository/operadorRepository.js";

export function cadastrar(matricula, nome, funcao, turno) {
  const operador = new Operador(matricula, nome, funcao, turno);
  cadastrarOperador(operador);
}

export function listar() {
  const operadores = listarOperadores();
  console.log("\n--- LISTA DE OPERADORES ---");
  for (let i = 0; i < operadores.length; i++) {
    const o = operadores[i];
    console.log(`[Índice ${i}] Matrícula: ${o.matricula} | Nome: ${o.nome} | Função: ${o.funcao} | Turno: ${o.turno} | Status: ${o.status}`);
  }
}

export function buscarPorIndice(indice) {
  const operador = buscarOperadorPorIndice(indice);
  if (!operador) {
    console.log(`[Operador] Índice ${indice} não encontrado.`);
    return null;
  }
  console.log(`[Operador Encontrado] Índice ${indice}:`, operador, `| Status: ${operador.status}`);
  return operador;
}

export function atualizar(indice, matricula, nome, funcao, turno) {
  const operadorExistente = buscarOperadorPorIndice(indice);
  if (!operadorExistente) {
    console.log(`[Operador] Impossível atualizar. Índice ${indice} não existe.`);
    return;
  }
  const novoOperador = new Operador(matricula, nome, funcao, turno);
  atualizarOperador(indice, novoOperador);
}

export function excluir(indice) {
  const operadorExistente = buscarOperadorPorIndice(indice);
  if (!operadorExistente) {
    console.log(`[Operador] Impossível excluir. Índice ${indice} não existe.`);
    return;
  }
  excluirOperador(indice);
}

export function ativarOperador(indice) {
  const operador = buscarOperadorPorIndice(indice);
  if (!operador) {
    console.log(`[Operador] Índice ${indice} não encontrado para ativar.`);
    return;
  }
  operador.ativar();
}

export function desativarOperador(indice) {
  const operador = buscarOperadorPorIndice(indice);
  if (!operador) {
    console.log(`[Operador] Índice ${indice} não encontrado para desativar.`);
    return;
  }
  operador.desativar();
}