import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente/cliente';
import { ClienteService } from '../services/cliente/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  public clientes: Cliente[] = [];
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getUsers().subscribe((data: Cliente[]) => {
      console.log(data);
      this.clientes = data;
    });
  }

}
