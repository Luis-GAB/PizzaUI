import { Component, input, output } from '@angular/core';
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
  mensajeErrorNum = '';
  mensajeErrorDir = '';
  mensajeErrorPedido = '';
  mensajeErrorHora = '';
  mensajeGracias = '';
  pizzasPedido = input<{nombre: string, cantidad: number}[]>([]);
  eliminarPedido = output<void>();

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
      this.mensajeErrorNum = 'No has introducido nada';
      return;
    }

    if (this.tipoSeleccionado === 'bizum' && !/^\d+$/.test(valor)) {
      this.mensajeErrorNum = 'Debes introducir solo números';
      return;
    } else if (this.tipoSeleccionado === 'bizum' && valor.length !== 9) {
      this.mensajeErrorNum = 'El número de tarjeta debe tener 9 dígitos';
      return;
    }

    if (this.tipoSeleccionado === 'tarjeta' && valor.length !== 16) {
      this.mensajeErrorNum = 'El número de tarjeta debe tener 16 dígitos';
      return;
    }

    this.mensajeErrorNum = '';
  }

  tratarPedido(enviar: boolean) {

    this.validarInput();
    var noValid = false;

    if (enviar) {
      // Comprobar si la hora está vacía
      const hora = this.pedidoForm.controls.hora.value;
      if (hora === '') { 
        this.mensajeErrorHora = 'Debes seleccionar una hora para el pedido.';
        noValid = true;
      } else {
        this.mensajeErrorHora = '';
      }
 
      // Comprobar si el pedido está vacío
      if (this.pizzasPedido().length === 0) {
        this.mensajeErrorPedido = 'No puedes enviar un pedido vacío.';
        noValid = true;
      } else {
        this.mensajeErrorPedido = '';
      }

      // Comprobar si la dirección está vacía
      const direccion = this.pedidoForm.controls.direccion.value;
      if (direccion === '') {
        this.mensajeErrorDir = 'Debes introducir una dirección.';
        noValid = true;
      } else {
        this.mensajeErrorDir = '';
      }

    }

    if (noValid){
      return;
    }

    if (this.pedidoForm.invalid && (enviar)) {
      this.pedidoForm.markAllAsTouched();
      this.mensajeGracias = '';
      this.mensajeErrorNum = '';
      this.mensajeErrorDir = '';
      this.mensajeErrorPedido = '';
      this.mensajeErrorHora = '';
      return;
    }

    this.pedidoForm.reset({
      hora: '',
      direccion: '',
      metodo: 'bizum',
      numeros: ''
    });

    // Avisamos a App para borrar las pizzas
    this.eliminarPedido.emit();

    if (enviar) {
      this.tipoSeleccionado = 'bizum';
      this.textoEtiqueta = 'Número móvil:';
      this.mensajeGracias = '¡Gracias por tu pedido!';
    } else if (!enviar) {
      this.mensajeGracias = '¡Pedido eliminado!';
      this.mensajeErrorNum = '';
      this.mensajeErrorDir = '';
      this.mensajeErrorPedido = '';
      this.mensajeErrorHora = '';
    }

  }
  
}
