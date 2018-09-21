import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@anglar/core';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './api.service';
import { AppComponent } from './app.componet';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
    ],
    providers: [ 
        ApiService,
    ],
    bootstrap: [
        AppComponent,
    ],
})

export class AppModule { }