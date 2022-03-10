import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CalculadoraIMC';
  miHistorial: string[]=[];



  obtenerhistorial(datos: any){
    console.log(datos);
    this.miHistorial=datos;

  }
}


