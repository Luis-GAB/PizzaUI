import { Component, signal, output} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-navbar',
  styleUrl: './profile.scss',
  templateUrl: './profile.html',
})

export class Profile {
  titulo = signal('Mail Pizza');
  //nombreIngrediente = new FormControl("");
  //ingredienteBuscar = input("");
  eventClick = output<string>();

  contactForm = new FormGroup({
    nombreIngrediente: new FormControl('', { validators: [Validators.required], nonNullable: true}),
  });

  buscarPizza(){
    const nombre = this.contactForm.controls.nombreIngrediente.value;   //?? ''
    this.eventClick.emit(nombre);
  }
}
