import { Component, input } from '@angular/core';
import { PizzaCard } from '../listapizzas/pizza-card/pizza-card';

@Component({
  imports: [PizzaCard],
  selector: 'app-listapizzas',
  styleUrl: './listapizzas.scss',
  templateUrl: './listapizzas.html',
})

export class Listapizzas {
  
  ingredienteBuscar = input<string>("");

  //listaPizzas: PizzaCard[] = [];
  pizzas = [
    { name: 'Jamon y Queso',
      imagen: 'pizzaJamonQueso.jpg',
      ingredientes: ["Jamón cocido", "Queso mozzarela", "Salsa tomate"],
      precio: 7.50 },
    { name: '4 Quesos',
      imagen: 'pizza4quesos.jpg',
      ingredientes: ["Queso mozzarela", "Queso azul", "Queso curado", "Queso semiblando", "Oregano"],
      precio: 7.50 },
    { name: 'Margarita',
      imagen: 'pizzaMargarita.jpg',
      ingredientes: ["Sal", "Queso mozzarella", "Salsa tomate", "Aceite oliva virgen", "Hojas de albahaca fresca"],
      precio: 8.00 },
    { name: 'Barbacoa',
      imagen: 'pizzaBarbacoa.jpg',
      ingredientes: ["Salsa tomate frito", "Queso mozzarela", "Carne picada", "Bacon en taquitos", "Pollo desmenuzado", "Salsa barbacoa", "Oregano seco"],
      precio: 8.25 },]
  
  //constructor() {
    //let pizzaJamon = new PizzaCard("Jamon y Queso", "pizzaJamonQueso.jpg", ["Jamón cocido", "Queso mozzarela", "Salsa tomate"], 7.50);
    //let pizza4Quesos = new PizzaCard("4 Quesos", "pizza4quesos.jpg", ["Queso mozzarela", "Queso azul", "Queso curado", "Queso semiblando", "Oregano"], 7.50);
    //let pizzaMargarita = new PizzaCard("Margarita", "pizzaMargarita.jpg", ["Sal", "Queso mozzarella", "Salsa tomate", "Aceite oliva virgen", "Hojas de albahaca fresca"], 8.00);
    //let pizzaBarbacoa = new PizzaCard("Barbacoa", "pizzaBarbacoa.jpg", ["Salsa tomate frito", "Queso mozzarela", "Carne picada", "Bacon en taquitos", "Pollo desmenuzado", "Salsa barbacoa", "Oregano seco"], 8.25);
    //this.listaPizzas = [pizzaJamon, pizza4Quesos, pizzaMargarita, pizzaBarbacoa];
  //}

  get pizzasFiltradas() {
    const texto = this.ingredienteBuscar().trim().toLowerCase();
    //alert(texto);

    if (!texto) {
      return this.pizzas;
    }

    return this.pizzas.filter(pizza =>
      pizza.ingredientes.some(ingrediente =>
      ingrediente.toLowerCase().includes(texto)));
    }

}
