import {Component, Input, OnInit} from '@angular/core';
import {InicioComponent} from "../inicio/inicio.component";

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.scss']
})
export class FinalComponent implements OnInit {


@Input() imprimirHistorial: string[]=[];





  constructor() {

  }

  ngOnInit(): void {
  }

}
