import { Component, OnInit, signal } from '@angular/core';
import Cliente from '../../Models/Cliente';
import { ClienteService } from '../../services/cliente-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-cliente-detail',
  styleUrl: './cliente-detail.css',
  templateUrl: './cliente-detail.html',
})
export class ClienteDetail implements OnInit{

  selectedCliente = signal<Cliente|undefined>(undefined);

  constructor(private cService: ClienteService,
              private route: ActivatedRoute,
              private router: Router
  ){}

  ngOnInit(): void {
    const clienteId = this.route.snapshot.params['id'];
    this.traerCliente(clienteId);
  }

  traerCliente(id:string){
    this.cService.getClienteId(id).subscribe({
      next: (data) => {this.selectedCliente.set(data)},
      error: ()=> {alert('Erro al mostrar cliente')}
    })
  }

  borrarCliente(id:string){
    this.cService.deleteCliente(id).subscribe({
      next: () => {this.router.navigate(['/clientes']), alert('Cliente eliminado con exito!')},
      error: () =>(alert('Error al borrar cliente'))
    })
  }
}
