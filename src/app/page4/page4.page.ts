import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.page.html',
  styleUrls: ['./page4.page.scss'],
})
export class Page4Page implements OnInit {
  slider: any[]=[
    {imagen:"assets/img/img4.jpg"},
    {imagen:"assets/img/img5.jpg"},
    {imagen:"assets/img/img6.jpg"}
  ];


  constructor() { }

  ngOnInit() {
  }



}
