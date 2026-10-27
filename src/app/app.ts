import { Component, signal } from '@angular/core';
import { Profile } from './profile/profile';
import { Listapizzas } from './listapizzas/listapizzas';
import { Formulario } from './formulario/formulario';

@Component({
  imports: [Profile, Listapizzas, Formulario],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})

export class App {
  protected readonly title = signal('PizzaBootstrap');

  ingredienteBuscar = '';

  recibirBusqueda(ingrediente: string) {
    this.ingredienteBuscar = ingrediente;
    //alert('Ingrediente buscar: ' + ingrediente);
  }
}
