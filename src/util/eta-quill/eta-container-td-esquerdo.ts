import { Elemento } from '../../model/elemento';
import { EtaContainer } from './eta-container';

const Break = Quill.import('blots/break');
const Block = Quill.import('blots/block');
const Text = Quill.import('blots/text');

export class EtaContainerTdEsquerdo extends EtaContainer {
  static blotName = 'EtaContainerTdEsquerdo';
  static tagName = 'DIV';
  static className = 'container__texto';
  static classLevel = 'level';

  static allowedChildren = [Block, Break, Text];

  get instanceBlotName(): string {
    return EtaContainerTdEsquerdo.blotName;
  }

  static create(elemento: Elemento): any {
    const node: HTMLElement = super.create();

    // node.setAttribute('contenteditable', 'false');
    // node.setAttribute('contenteditable', elemento.editavel ? 'true' : 'false');
    node.setAttribute('class', EtaContainerTdEsquerdo.className + ' container__texto--nivel' + elemento.nivel);

    const fator = Number(getComputedStyle(document.documentElement).getPropertyValue('--elemento-padding-factor'));
    if (fator) {
      const padding: number = (elemento.agrupador || elemento.tipo === 'Ementa' ? 0 : elemento.nivel) * fator + 5;
      node.setAttribute('style', `padding-left: ${padding}px;`);
    }
    if (elemento.tipoOmissis) {
      node.setAttribute('tipo-omissis', elemento.tipoOmissis);
    }
    return node;
  }

  [key: string]: any;

  constructor(elemento: Elemento) {
    super(EtaContainerTdEsquerdo.create(elemento));
  }
}
