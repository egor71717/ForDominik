import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() menuChange = new EventEmitter();

  menuItems = [
    'Main',
    'Home',
    'Products',
    'Work',
    'Team',
  ]

  constructor() { }

  ngOnInit() {
  }

  changeMenu(menuItem: string){
    this.menuChange.emit(menuItem)
  }

}
