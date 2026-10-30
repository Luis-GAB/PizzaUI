import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Listapizzas } from './listapizzas/listapizzas';
import { Formulario } from './formulario/formulario';

@Component({
  imports: [Navbar, Listapizzas, Formulario, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})

export class App {
  //constructor(private router: Router) {}
  protected readonly title = signal('PizzaBootstrap');
  paginaActual = 'listapizzas'; // Página que se muestra al entrar
  pizzasPedido: {nombre: string, cantidad: number}[] = [];
  ingredienteBuscar = '';

  cambiarPagina(pagina: string) {
    this.paginaActual = pagina;
  }

  recibirBusqueda(ingrediente: string) {
  //  this.router.navigate(['/listapizzas'], {
  //          queryParams: { ingrediente: ingrediente }
  //      });
    this.ingredienteBuscar = ingrediente;
    this.paginaActual = 'listapizzas';
    //alert('Ingrediente buscar: ' + ingrediente);
  }

  recibirPizza(pizza: {nombre: string, cantidad: number}) {
    this.pizzasPedido = [...this.pizzasPedido, pizza];
  }

}
