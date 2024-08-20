import { Injectable } from '@angular/core';
import { Cliente } from '../componentes/model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  clienteLista: Cliente[] = [];

  constructor() { }

salvar(cliente: Cliente) {
  this.get_all();
  if (cliente.id) {
    // Se existe ID, altera
    const cliente_alterar = this.clienteLista.find((value) => cliente.id == value.id);
    if (cliente_alterar != null) {
      cliente_alterar.nome = cliente.nome;
      cliente_alterar.id_cidade_lookup = cliente.id_cidade_lookup;

      this.excluir(cliente_alterar.id);

      this.clienteLista.push(cliente_alterar);
    }
  } else {
    //Se não existe ID, cria
    let proximo = 1;
    if (this.clienteLista.length > 0) {
      proximo = this.clienteLista[this.clienteLista.length - 1].id + 1;
    }
    cliente.id = proximo;
    this.clienteLista.push(cliente);
  }

  window.localStorage.setItem('clienteLista', JSON.stringify(this.clienteLista));
};

get_all() {
  const list = window.localStorage.getItem('clienteLista');

  if (list) {
    this.clienteLista = JSON.parse(list);
  }

  return this.clienteLista;
};

getById(id: number) {
  this.get_all();
  const cliente = this.clienteLista.find((value) => value.id == id);
  return cliente;
}

excluir(id: number) {
  const cliente_index = this.clienteLista.findIndex((value) => value.id == id);

    this.clienteLista.splice(cliente_index, 1);

    window.localStorage.setItem('clienteLista', JSON.stringify(this.clienteLista));
  };
};