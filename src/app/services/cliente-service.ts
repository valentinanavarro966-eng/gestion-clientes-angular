import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Cliente from '../Models/Cliente';

@Injectable({
    providedIn: 'root'
})
export class ClienteService {
    readonly API_URL = "http://localhost:3000/clientes";

    constructor(private http: HttpClient){}

    getClientes(){
        return this.http.get<Cliente[]>(this.API_URL);
    }
    getClienteId(id: string){
        return this.http.get<Cliente>(`${this.API_URL}/${id}`);
    }
    addCliente(cliente: Cliente){
        return this.http.post<Cliente>(this.API_URL, cliente);
    }
    editCliente(cliente: Cliente){
        return this.http.put<Cliente>(`${this.API_URL}/${cliente.id}`, cliente);
    }
    deleteCliente(id:string){
        return this.http.delete<void>(`${this.API_URL}/${id}`);
    }
}
