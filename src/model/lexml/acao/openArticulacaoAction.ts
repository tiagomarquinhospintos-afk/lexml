import { LexmlEtaParametrosEdicao } from '../../../components/lexml-emenda.component';

export const ABRIR_ARTICULACAO = 'ABRIR_ARTICULACAO';

export const openArticulacaoAction = (articulacao: any, classificacao?: string, params?: LexmlEtaParametrosEdicao): any => {
  return {
    type: ABRIR_ARTICULACAO,
    classificacao,
    articulacao,
    params,
  };
};
