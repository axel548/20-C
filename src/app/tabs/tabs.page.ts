import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor() {}
  enlaceFacebook(){
    window.open('https://www.facebook.com/guatemalagob/','_system')
  }
 
  enlaceYoutube(){
    window.open('https://www.youtube.com/channel/UCRwA1NUcUnwsly35ikGhp0A','_system');
  }
 
  enlaceInstagram(){
    window.open('https://www.instagram.com/covidguatemala/','_system');
  }
}


