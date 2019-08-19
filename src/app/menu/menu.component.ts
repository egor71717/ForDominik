import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() menuChange = new EventEmitter();

  itemWithOpenedChildren = undefined;
  menuItems = [
    {
      title: 'Home',
      path: '/'
    },
    {
      title: 'Products',
      path: '/products',
      children: [
        "Tv",
        "Phone",
        "vibrator"
      ]
    },
    {
      title: 'Work',
      path: '/work'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  changeMenu(menuItem: string){
    this.menuChange.emit(menuItem)
  }

}
