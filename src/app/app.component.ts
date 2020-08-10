import { Component } from '@angular/core';
import { Item } from './item/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  itens: Item[] = [
    {checked: false, description: 'Lorem Ipsum...', title: 'Item 1'},
    {checked: true, description: 'Lorem Ipsum...', title: 'Item 2'},
    {checked: false, description: 'Lorem Ipsum...', title: 'Item 3'},
    {checked: true, description: 'Lorem Ipsum...', title: 'Item 4'},
  ];

}
