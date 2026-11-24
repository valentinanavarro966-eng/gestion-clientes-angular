import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClienteService } from '../../services/cliente-service';
import { ActivatedRoute, Router } from '@angular/router';
import Cliente from '../../Models/Cliente';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-form',
  styleUrl: './form.css',
  templateUrl: './form.html',
})
export class Form implements OnInit {

  clienteForm!: FormGroup
  id?:string
  nombreF!: FormControl
  empresaF!: FormControl
  emailF!: FormControl
  telefonoF!: FormControl
  comentariosF!: FormControl
  
  constructor(private cService: ClienteService,
              private route: ActivatedRoute,
              private router: Router
  ){}

  ngOnInit(): void {
    this.nombreF = new FormControl ('', [Validators.required, Validators.minLength(3)]),
    this.empresaF = new FormControl('', Validators.required),
    this.emailF = new FormControl('', [Validators.required, Validators.maxLength(20), Validators.email]),
    this.telefonoF =  new FormControl ('', Validators.required),
    this.comentariosF = new FormControl ('',[Validators.required, Validators.maxLength(200)] ),

    this.clienteForm = new FormGroup({
      nombre: this.nombreF,
      empresa: this.empresaF,
      email: this.emailF,
      telefono: this.telefonoF,
      comentarios: this.comentariosF
    })

    this.id = this.route.snapshot.params['id'];
    if(this.id){
      this.cService.getClienteId(this.id).subscribe(cliente => this.clienteForm.patchValue(cliente));
    }
  }

  onSubmit(){
    if(this.clienteForm.invalid) return;
    if(this.id){
      //EDITAR
      const clienteData: Cliente = {id: this.id, ...this.clienteForm.value};
      this.cService.editCliente(clienteData).subscribe({
        next: () => {this.router.navigate(['/cliente', clienteData.id]), alert('Cliente editado con exito!')},
        error: () => {alert("Error al editar el cliente")}
      })
    }else{
      //AGREGAR
      this.cService.addCliente(this.clienteForm.value).subscribe({
        next: () => {this.clienteForm.reset(), alert('Cliente agregado con exito!')},
        error: () => {alert('Error al editar cliente')}
      })
    }
  }
}
