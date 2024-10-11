import { criarItemDaLista } from "./criarItemDaLista";
import { verificarListaVazia } from "./verificarListaVazia";

const item = document.getElementById("input-item");

const listaDeCompras = document.getElementById("lista-de-compras");

export function adicionarItem(evento) {
    evento.preventDefault()

    const itemDaLista = criarItemDaLista;
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);
}