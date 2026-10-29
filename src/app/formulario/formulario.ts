import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-formulario',
  styleUrl: './formulario.scss',
  templateUrl: './formulario.html',
})
export class Formulario {

  tipoSeleccionado = 'bizum';
  textoEtiqueta = 'Número movil:';

  cambiarTipo(event: Event) {
    const select = event.target as HTMLSelectElement;

    this.tipoSeleccionado = select.value;

    switch (this.tipoSeleccionado) {
      case 'bizum':
        this.textoEtiqueta = 'Número movil:';
        break;

      case 'tarjeta':
        this.textoEtiqueta = 'Número tarjeta:';
        break;
    }
  }
  
}
