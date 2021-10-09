import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de personas';
  nombreInput:string = '';
  apellidoInput:string = '';

  personas: Persona[] = [new Persona('Cristhian','Bastidas'),
                         new Persona('Camilo', 'Benavides'),
                         new Persona('Carlos', 'Perez')];

  agregarPersona() {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.personas.push(persona1);

  }

}

