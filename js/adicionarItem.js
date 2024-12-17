import { incluiItemNaPagina, pegaNoLocalStorage, salvaNoLocalStorage } from "./operaLista.js";

const item = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");
//debugger
const itensDaLista = pegaNoLocalStorage();

export function adicionarItem(evento) {
    evento.preventDefault();
    
    //debugger

    if(item.value === ""){
        alert("Por favor, insira um item!");
        return;
    }
    //
    itensDaLista.push(item.value)
    salvaNoLocalStorage(itensDaLista);
    incluiItemNaPagina(listaDeCompras, item.value);
    //
    item.value = "";

}

itensDaLista.forEach((item) => {
    incluiItemNaPagina(listaDeCompras, item);
});