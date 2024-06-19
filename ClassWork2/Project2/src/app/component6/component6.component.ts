import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../ToDoItems';
import { ITEMS } from '../mock-component6';

@Component({
  selector: 'app-component6',
  templateUrl: './component6.component.html',
  styleUrls: ['./component6.component.scss']
})
export class Component6Component implements OnInit {

  items: ToDoItem[] = ITEMS;
  // public items: ToDoItem[] = [];
  public car: string = 'Audi';
  public selectedItem: ToDoItem | undefined;

  public onSelect(item: ToDoItem){
    console.log('item', item);

    this.selectedItem = item;

  }


  public isloader: boolean = false;

  ngOnInit(): void {
    console.log("ngOnInit");
  }
}


