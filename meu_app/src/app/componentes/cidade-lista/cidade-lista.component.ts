import { Component, OnInit } from '@angular/core';
import { Cidade } from '../model/cidade';
import { CidadeService } from '../../services/cidade.service';

@Component({
  selector: 'app-cidade-lista',
  templateUrl: './cidade-lista.component.html',
  styleUrl: './cidade-lista.component.css'
})
export class CidadeListaComponent implements OnInit {
  cidadeLista: Cidade[] = [];
  cidadeSelecionada: Cidade = new Cidade();

  constructor(private service: CidadeService) { };

  ngOnInit(): void {
    this.cidadeLista = this.service.get_all();
  };

  seleciona_cidade(cidade: Cidade) {
    this.cidadeSelecionada = cidade;
  };

  excluir() {
    this.service.excluir(this.cidadeSelecionada.id);
  };
}
