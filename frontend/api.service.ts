import  { Injectale } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectale()
export class  ApiService {
    private apiRot = 'http://localhost:8000/';
    contructor(private http: HttpClient) {}

    getListaIntems(){
        return this.http.get(this.apiRoot.concat('lista-item/'));
    }
}