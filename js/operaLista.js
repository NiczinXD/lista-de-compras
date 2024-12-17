import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

//
export function pegaNoLocalStorage(){
    const aux = JSON.parse(localStorage.getItem('listaDeCompras')) || [];
    return aux;
}
export function salvaNoLocalStorage(itensDaLista){
    localStorage.setItem("listaDeCompras", JSON.stringify(itensDaLista));
}

export function incluiItemNaPagina(listaDeCompras, item){
    const itemDaLista = criarItemDaLista(item);
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);
}
//