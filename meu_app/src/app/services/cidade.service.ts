import { Injectable } from '@angular/core';
import { Cidade } from '../componentes/model/cidade';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {
  cidadeLista: Cidade[] = [];

  constructor() { }

  salvar(cidade: Cidade) {
    this.get_all();
    if (cidade.id) {
      // Se existe ID, altera
      const cidade_alterar = this.cidadeLista.find((value) => cidade.id == value.id);
      if (cidade_alterar != null) {
        cidade_alterar.nome = cidade.nome;
        cidade_alterar.uf = cidade.uf;

        this.excluir(cidade_alterar.id);

        this.cidadeLista.push(cidade_alterar);
      }
    } else {
      //Se não existe ID, cria
      let proximo = 1;
      if (this.cidadeLista.length > 0) {
        proximo = this.cidadeLista[this.cidadeLista.length - 1].id + 1;
      }
      cidade.id = proximo;
      this.cidadeLista.push(cidade);
    }

    window.localStorage.setItem('cidadeLista', JSON.stringify(this.cidadeLista));
  };

  get_all() {
    const list = window.localStorage.getItem('cidadeLista');

    if (list) {
      this.cidadeLista = JSON.parse(list);
    }

    return this.cidadeLista;
  };

  getById(id: number) {
    this.get_all();
    const cidade = this.cidadeLista.find((value) => value.id == id);
    return cidade;
  }

  excluir(id: number) {
    const cidade_index = this.cidadeLista.findIndex((value) => value.id == id);

    this.cidadeLista.splice(cidade_index, 1);

    window.localStorage.setItem('cidadeLista', JSON.stringify(this.cidadeLista));
  };
}
