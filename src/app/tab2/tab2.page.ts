import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  noticias: any[] = [
    { titulo: "Salud reporta 233 casos", empresa: "Prensa Libre", hora: "hace 21 horas", imagen: "assets/img/img1.jpg"},
    { titulo: "757 nuevos contagio", empresa: "Prensa Libre", hora: "hace 2 días", imagen: "assets/img/img2.jpg"},
    { titulo: "Estados Unidos registra casi seis millones de casos de Covid-19", empresa: "Publinews Guatemala", hora: "hace 9 horas*", imagen: "assets/img/img3.jpg"}
  ];

  constructor() {
  }
}
