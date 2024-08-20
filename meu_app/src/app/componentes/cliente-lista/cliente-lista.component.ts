import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrl: './cliente-lista.component.css'
})
export class ClienteListaComponent implements OnInit {
  clienteLista: Cliente[] = [];
  clienteSelecionado: Cliente = new Cliente();

  constructor(private service: ClienteService) { };

  ngOnInit(): void {
    this.clienteLista = this.service.get_all();
  };

  seleciona_cliente(cliente: Cliente) {
    this.clienteSelecionado = cliente;
  };

  excluir() {
    this.service.excluir(this.clienteSelecionado.id);
  };
}
