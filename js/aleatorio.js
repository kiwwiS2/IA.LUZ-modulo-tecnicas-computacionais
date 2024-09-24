const nomes = [Thomas, Eduarda, Vitoria, Antonella, apollo ,saimon , cristal];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
