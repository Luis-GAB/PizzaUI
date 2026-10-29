import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-formulario',
  styleUrl: './formulario.scss',
  templateUrl: './formulario.html',
})

export class Formulario {

  tipoSeleccionado = 'bizum';
  textoEtiqueta = 'Número movil:';
  valorInput = '';
  mensajeError = '';
  mensajeGracias = '';

  pedidoForm = new FormGroup({
    hora: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    metodo: new FormControl('bizum', Validators.required),
    numeros: new FormControl('', [
      Validators.required
      //Validators.pattern(/^\d+$/),
      //Validators.minLength(9),
      //Validators.maxLength(16)
    ])
  });

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

  enviarPedido() {
    this.validarInput();

    if (this.pedidoForm.invalid) {
      this.pedidoForm.markAllAsTouched();
      this.mensajeGracias = '';
      return;
    }

    this.pedidoForm.reset({
      hora: '',
      direccion: '',
      metodo: 'bizum',
      numeros: ''
    });

    this.tipoSeleccionado = 'bizum';
    this.textoEtiqueta = 'Número móvil:';
    this.mensajeGracias = '¡Gracias por tu pedido!';

  }
  
}
