import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Clientes } from './pages/clientes/clientes';
import { ClienteDetail } from './pages/cliente-detail/cliente-detail';
import { Form } from './pages/form/form';

export const routes: Routes = [
    {path: "", component: Home},
    {path: "clientes", component: Clientes},
    {path: "cliente/:id", component: ClienteDetail},
    {path: "form-add", component: Form},
    {path: "form-edit/:id", component: Form}
];
