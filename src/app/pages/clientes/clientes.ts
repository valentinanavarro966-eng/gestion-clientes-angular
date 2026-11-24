import { Component, OnInit, signal } from '@angular/core';
import Cliente from '../../Models/Cliente';
import { ClienteService } from '../../services/cliente-service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-clientes',
  styleUrl: './clientes.css',
  templateUrl: './clientes.html',
})
export class Clientes implements OnInit{

  clientes = signal<Cliente[]>([]);

  constructor(private cService: ClienteService){}

  ngOnInit(): void {
    this.traerTodosLosClientes();
  }

  traerTodosLosClientes(){
    this.cService.getClientes().subscribe({
      next: (data) => {this.clientes.set(data)},
      error: () => {alert('Error al mostrar los clientes')}
    })
  }
}
