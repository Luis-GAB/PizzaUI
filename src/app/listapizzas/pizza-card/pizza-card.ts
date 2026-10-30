import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-pizza-card',
  styleUrl: './pizza-card.scss',
  templateUrl: './pizza-card.html',
})

export class PizzaCard {

  //name: string;
  //imagen: string;
  //ingredientes: string[];
  valorInput = '';
  nombre = input<string>("Pizza");
  srcImagen = input<string>("assets/default.jpg");
  listaIngredientes = input<string[]>([]);
  precio = input<number>(0);

   pizzaSeleccionada = output<{nombre: string, cantidad: number}>();

  anadirPedido() {
    const valor = this.valorInput.trim();

    if (valor === '' || !/^\d+$/.test(valor)) {
      return;
    }

    const cantidad = Number(valor);

    if (cantidad <= 0) {
      return;
    }

    this.pizzaSeleccionada.emit({
      nombre: this.nombre(),
      cantidad: cantidad
    });

  }
   
  //constructor(nombre: string, foto: string, ingredientes: string[], precio: number) {
      //this.nombre = nombre;
      //this.srcImage = foto;
      //this.listaIngredientes = ingredientes;
      //this.precio = precio;
  //}

}
