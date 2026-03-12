export const Mesa = {
    Material: "Pedra"
};
export const objeto = {
    chaveA: 'Value A',
    chaveB: 'Value B',
};
export const pessoa = {
    nome: "Kenzo",
    idade: 10,
    adulto: false,
    simbolo: Symbol('symbol-id'),
    big: 10n,
    nulo: null,
    indefinido: undefined
};
objeto.chaveC = "Value C";
console.log(Mesa);
console.log(objeto);
