import {Component, OnInit, Output} from '@angular/core';




@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  public nombre: string='';
  public masculino: boolean=true;
  public femenino: boolean=false;
  public altura: number=0;
  public peso: number=0;
  public resultado: number=0;
  public resultadotexto: string='';

  @Output() resultados=' pepe';

  constructor(

  ) { }



  ngOnInit(): void {

  }

  public enviar(){
    this.resultado= (this.peso / (this.altura/100));
  }

  public validar(){
    if (this.resultado>=30){
      this.resultadotexto= 'Obesidad';
    } else if (this.resultado>=25 && this.resultado<=29.9){
      this.resultadotexto= 'Peso superior al normal';
    }else if (this.resultado>=18.5 && this.resultado<=24.9){
      this.resultadotexto= 'Normal'
    } else if (this.resultado>0 && this.resultado<18.5 ){
      this.resultadotexto= 'Peso inferior al normal'
    } else if (this.resultado<=0 ){
      this.resultadotexto= 'Peso no válido'
    }
  }
}
