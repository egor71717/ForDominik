import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.scss']
})
export class RecipiesComponent implements OnInit {


  key = "Recipies"
  constructor() { }

  ngOnInit() {
    this.items = JSON.parse(localStorage.getItem(this.key));
    if(!this.items)
      this.items = [];
  }

  login 
  password
  items = [];


  onDelete(index){
    const before = index - 1 <= 0 ? [] : this.items.slice(0, index);
    const after = index + 1 >= this.items.length ? [] : this.items.slice(index + 1, this.items.length);
    this.items = [...before, ...after];
    localStorage.setItem(this.key, JSON.stringify(this.items));
  }

  onAdd(){

      const value = {
        date: new Date().toLocaleString(),
        login: this.login,
        password: this.password
      }
      this.login = undefined;
      this.password = undefined;
      this.items.push(value);
    localStorage.setItem(this.key, JSON.stringify(this.items));
  }
}
