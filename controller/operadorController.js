import { Operador } from "../model/operador.js";
import * as operadorRepo from "../repository/operadorRepository.js";

export function cadastrar(matricula, nome, funcao, turno) {
  const operador = new Operador(matricula, nome, funcao, turno);
  operadorRepo.cadastrarOperador(operador);
}

export function listar() {
  const operadores = operadorRepo.listarOperadores();
  for (let i = 0; i < operadores.length; i++) {
    const o = operadores[i];
    console.log(`[Índice ${i}] Matrícula: ${o.matricula} | Nome: ${o.nome} | Função: ${o.funcao} | Turno: ${o.turno} | Status: ${o.status}`);
  }
}

export function buscarPorIndice(indice) {
  const operador = operadorRepo.buscarOperadorPorIndice(indice);
  if (!operador) {
    console.log(`[Operador] Índice ${indice} não encontrado.`);
    return null;
  }
  console.log(`[Operador Encontrado] Índice ${indice}:`, operador, `| Status: ${operador.status}`);
  return operador;
}

export function atualizar(indice, matricula, nome, funcao, turno) {
  const operadorExistente = operadorRepo.buscarOperadorPorIndice(indice);
  if (!operadorExistente) {
    console.log(`[Operador] Impossível atualizar. Índice ${indice} não existe.`);
    return;
  }
  const novoOperador = new Operador(matricula, nome, funcao, turno);
  operadorRepo.atualizarOperador(indice, novoOperador);
}

export function excluir(indice) {
  const operadorExistente = operadorRepo.buscarOperadorPorIndice(indice);
  if (!operadorExistente) {
    console.log(`[Operador] Impossível excluir. Índice ${indice} não existe.`);
    return;
  }
  operadorRepo.excluirOperador(indice);
}

export function ativarOperador(indice) {
  const operador = operadorRepo.buscarOperadorPorIndice(indice);
  if (!operador) {
    console.log(`[Operador] Índice ${indice} não encontrado para ativar.`);
    return;
  }
  operador.ativar();
}

export function desativarOperador(indice) {
  const operador = operadorRepo.buscarOperadorPorIndice(indice);
  if (!operador) {
    console.log(`[Operador] Índice ${indice} não encontrado para desativar.`);
    return;
  }
  operador.desativar();
}