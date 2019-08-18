import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showHome = false;
  showMain = true;
  showNotFound = false;
  showProducts = false;


  title = 'dominik-app';

  onMenuChange(event: string) {
    switch(event) { 
      case 'Home': { 
        this.showHome = true;
        this.showMain = false;
        this.showProducts = false;
        this.showNotFound = false;
         break; 
      } 
      case 'Main': { 
        this.showHome = false;
        this.showMain = true;
        this.showProducts = false;
        this.showNotFound = false;
         break; 
      }
      case 'Products': {
        this.showHome = false;
        this.showMain = false;
        this.showProducts = true;
        this.showNotFound = false;
        break;
      }
      default: { 
        this.showHome = false;
        this.showMain = false;
        this.showProducts = false;
        this.showNotFound = true;
      } 
   } 
  }
}
