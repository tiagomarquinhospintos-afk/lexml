import { Anexo, Autoria, ColegiadoApreciador, Epigrafe, OpcoesImpressao } from '../emenda/emenda';
import { Revisao } from '../revisao/revisao';
import { NotaRodape } from '../../components/editor-texto-rico/notaRodape';
import { ProjetoNorma } from '../lexml/documento/projetoNorma';

export class Proposicao {
  // Metadados padronizados para o lexml-eta-proposicao
  dataUltimaModificacao = new Date().toISOString();
  aplicacao = '';
  versaoAplicacao = '';
  metadados: Metadados = {};
  epigrafe = new Epigrafe();
  pendenciasPreenchimento: string[] = [];
  anexos: Anexo[] = [];
  justificativa = '';
  justificativaAntesRevisao?: string;
  local = '';
  autoria = new Autoria();
  opcoesImpressao = new OpcoesImpressao();
  revisoes: Revisao[] = [];
  colegiadoApreciador = new ColegiadoApreciador();
  notasRodape: NotaRodape[] = [];
  projetoNorma?: ProjetoNorma;

  urn = '';
  sigla = '';
  numero = '';
  ano = '';
  ementa = '';
}

export type Metadados = {
  [key: string]: string | number | boolean | string[] | number[] | boolean[];
};
