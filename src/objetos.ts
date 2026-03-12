export const Mesa = {
    Material: "Pedra"
};

export const objeto: { [key: string]: string} = {
    chaveA: 'Value A',
    chaveB: 'Value B',
};

export const pessoa = {
    nome: "Kenzo",
    idade: 10,
    adulto:  false,
    simbolo: Symbol('symbol-id'),
    big:  10n,
    nulo: null,
    indefinido: undefined
}

export const objeto2: Record<string, string> = {
    chaveA: "Value A",
    chaveB: "Value B",
};

objeto2.chaveC = "Value C"

objeto.chaveC = "Value C"



