import { Component, OnInit } from '@angular/core';
import { Cidade } from '../model/cidade';
import { CidadeService } from '../../services/cidade.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cidade-form',
  templateUrl: './cidade-form.component.html',
  styleUrl: './cidade-form.component.css'
})
export class CidadeFormComponent implements OnInit {
  constructor(private service: CidadeService, private router: Router, private activateRout: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activateRout.snapshot.paramMap.get('id');
    if (id) {
      this.cidade = this.service.getById(parseInt(id)) as Cidade;
    }
  };

  cidade: Cidade = new Cidade();

  onSubmit() {
    this.service.salvar(this.cidade);
    this.voltar_listagem();
  }

  voltar_listagem() {
    this.router.navigate(['/cidade-lista']);
  }
}
