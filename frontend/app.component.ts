import { Component, OnInit } from '@angular/core';

import { ApiService } from './api.service';
import { ListItem } from './lista-item.interface';

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
        <h2>{{ item.nome }}</h2>
      </li>
    </ul>
    {{ error?.message }}
    `
})

export class  AppComponent implements OnInit {
    items: ListaItem[];
    error: any;

    contructor(private api: ApiService) { }
    ngOnInit(){
        this.api.getListaItems().subscribe(
            (items: ListaItem[]) = this.items = items,
            (error: any) => this.erros = error
        );
    }
}

