import { Routes } from '@angular/router';
import { Listapizzas } from './listapizzas/listapizzas';
import { Formulario } from './formulario/formulario';

export const routes: Routes = [
    { path: '', redirectTo: 'listapizzas', pathMatch: 'full' },
    { path: 'listapizzas', component: Listapizzas },
    { path: 'formulario', component: Formulario }
];
