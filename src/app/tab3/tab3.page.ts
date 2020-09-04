import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
sintomas_comunes: any[]=[
  {name: "Fiebre"},
  {name: "Tos Seca"},
  {name: "Cansancio"}
];
sintomas_otro:any[]=[
  {name: "Molestias y dobles"},
  {name: "Dolor de Garganta"},
  {name: "Diarrea"},
  {name: "Conjuntivitis"},
  {name: "Dolor de Cabeza"},
  {name: "Pérdida del senido del olfato o del gusto"},
  {name: "Erupciones cutáneas"},
  {name: "Pérdida del color en los dedos de las manos o de los pies"}
];
prevencion: any[]=[
  {name:"Lávate las manos con frecuencia"},
  {name:"Mantén una distancia de seguridad con personas que tosan o estornuden"},
  {name:"Utiliza mascarilla"},
  {name:"No te toques los ojos, la nariz ni la boca"},
  {name:"Cuando tosas o estornudes, cúbrete la nariz y la boca con el codo flexionado o con un pañuelo"},
  {name:"Si no te encuentras bien, quédate en casa"},
  {name:"En caso de que tengas fiebre, tos o dificultad para respirar, busca atención médica"},
];
constructor() {}

}
