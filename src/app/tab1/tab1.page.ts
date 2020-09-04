import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  infectados:any[]=[
    {pais:"Guatemala", imagen:"assets/img/guatemala.png", confirmados:"73,912", recuperados:"50,692", muertes:"2,379"},
    {pais:"Honduras", imagen:"assets/img/honduras.png", confirmados:"60,174", recuperados:"10,242", muertes:"1,858"},
    {pais:"El Salvador", imagen:"assets/img/elsalvador.png", confirmados:"25,729", recuperados:"14,292", muertes:"717"},
    {pais:"Nicaragua", imagen:"assets/img/nicaragua.png", confirmados:"4,494", recuperados:"2,913", muertes:"137"},
    {pais:"Panamá", imagen:"assets/img/panama.png", confirmados:"92,065", recuperados:"65,747", muertes:"1,995"}
  ];
  constructor() {}

}
