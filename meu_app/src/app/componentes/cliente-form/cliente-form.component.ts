import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../../services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.css'
})
export class ClienteFormComponent {
  constructor(private service: ClienteService, private router: Router, private activateRout: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activateRout.snapshot.paramMap.get('id');
    if (id) {
      this.cliente = this.service.getById(parseInt(id)) as Cliente;
    }
  };

  cliente: Cliente = new Cliente();

  onSubmit() {
    this.service.salvar(this.cliente);
    this.voltar_listagem();
  }

  voltar_listagem() {
    this.router.navigate(['/cliente-lista']);
  };
}
