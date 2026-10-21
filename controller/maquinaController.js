import { Maquina } from "../model/maquina.js";
import * as maquinaRepo from "../repository/maquinaRepository.js";

export function cadastrar(codigo, nome, setor) {
  const maquina = new Maquina(codigo, nome, setor);
  maquinaRepo.cadastrarMaquina(maquina);
}

export function listar() {
  const maquinas = maquinaRepo.listarMaquinas();
  for (let i = 0; i < maquinas.length; i++) {
    const m = maquinas[i];
    console.log(`[Índice ${i}] Código: ${m.codigo} | Nome: ${m.nome} | Setor: ${m.setor} | Status: ${m.status}`);
  }
}

export function buscarPorIndice(indice) {
  const maquina = maquinaRepo.buscarMaquinaPorIndice(indice);
  if (!maquina) {
    console.log(`[Máquina] Índice ${indice} não encontrado.`);
    return null;
  }
  console.log(`[Máquina Encontrada] Índice ${indice}:`, maquina, `| Status: ${maquina.status}`);
  return maquina;
}

export function atualizar(indice, codigo, nome, setor) {
  const maquinaExistente = maquinaRepo.buscarMaquinaPorIndice(indice);
  if (!maquinaExistente) {
    console.log(`[Máquina] Impossível atualizar. Índice ${indice} não existe.`);
    return;
  }
  const novaMaquina = new Maquina(codigo, nome, setor);
  maquinaRepo.atualizarMaquina(indice, novaMaquina);
}

export function excluir(indice) {
  const maquinaExistente = maquinaRepo.buscarMaquinaPorIndice(indice);
  if (!maquinaExistente) {
    console.log(`[Máquina] Impossível excluir. Índice ${indice} não existe.`);
    return;
  }
  maquinaRepo.excluirMaquina(indice);
}

export function ligarMaquina(indice) {
  const maquina = maquinaRepo.buscarMaquinaPorIndice(indice);
  if (!maquina) {
    console.log(`[Máquina] Índice ${indice} não encontrado para ligar.`);
    return;
  }
  maquina.ligar();
}

export function desligarMaquina(indice) {
  const maquina = maquinaRepo.buscarMaquinaPorIndice(indice);
  if (!maquina) {
    console.log(`[Máquina] Índice ${indice} não encontrado para desligar.`);
    return;
  }
  maquina.desligar();
}