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
  valorInput = '';
  mensajeError = '';

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
    this.validarInput();
  }

  leerInput(event: Event) {
    this.valorInput = (event.target as HTMLInputElement).value;
    this.validarInput();
  }

  validarInput() {
    const valor = this.valorInput.trim();

    if (valor === '') {
      this.mensajeError = '';
      return;
    }

    if (this.tipoSeleccionado === 'bizum' && !/^\d+$/.test(valor)) {
      this.mensajeError = 'Debes introducir solo números';
      return;
    } else if (this.tipoSeleccionado === 'bizum' && valor.length !== 9) {
      this.mensajeError = 'El número de tarjeta debe tener 9 dígitos';
      return;
    }

    if (this.tipoSeleccionado === 'tarjeta' && valor.length !== 16) {
      this.mensajeError = 'El número de tarjeta debe tener 16 dígitos';
      return;
    }

    this.mensajeError = '';
  }
  
}
