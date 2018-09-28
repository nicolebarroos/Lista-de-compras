import  { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class  ApiService {
    private apiRoot = 'http://localhost:8008/';
    constructor(private http: HttpClient) { }

    getListaItems() {
        return this.http.get(this.apiRoot.concat('lista-item/'));
    }

    createListaItem(nome: string, quantidade: number){
        return this.http.post(
            this.apiRoot.concat('lista-item/'),
            { nome, quantidade}
        );
    }

    deleteListaItem(id: number){
        return this.http.delete(this.apiRoot.concat(`lista-item/${id}/`));
    }
}