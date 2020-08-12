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
    {checked: true, description: 'Dolor consectetur...', title: 'Item 2'},
    {checked: false, description: 'Sit Armet ...', title: 'Item 3'},
    {checked: true, description: 'Adipisicing elit et dolor...', title: 'Item 4'},
  ];

  acao2(val): void {
    console.log(`acão 2 ${val}`);
  }

  acao1(val): void {
    console.log(`acão 1 ${val}`);
  }

}
