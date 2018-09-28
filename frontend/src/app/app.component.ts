import { Component, OnInit } from '@angular/core';

import { ApiService } from './api.service';
import { ListaItem } from './lista-item.interface';

@Component({
  selector: 'app-root',
  template: `
  <div style="text-align:center">
    <h1>
      Lista de compras
    </h1>
  </div>
  <ul>
    <li *ngFor="let item of items">
      <h2>{{ item.quantidade }}x {{ item.nome }}
      <button (click)="delete(item.id)">x</button></h2>
    </li>
  </ul>

  <input #itemQuantidade type='text' placeholder='Qtd'>
  <input #itemNome type='text' placeholder='Nome'>
  <button (click)="add(itemNome.value, itemQuantidade.value)">Add</button>
  {{ error?.message }}
  `
})
export class AppComponent implements OnInit {

  items: ListaItem[];
  error: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getListaItems().subscribe(
      (items: ListaItem[]) => this.items = items,
      (error: any) => this.error = error
    );
  }

  add(itemNome: string, itemQuantidade: number){
    this.api.createListaItem(itemNome, itemQuantidade).subscribe(
      (item: ListaItem) => this.items.push(item)
    );
  }

  delete(id: number){
    this.api.deleteListaItem(id).subscribe(
      (success: any) => this.items.splice(
        this.items.findIndex(item => item.id === id)
      )
    );
  }
}