import { FormsModule } from '@angular/forms';
import { EscolhaCalculoComponent } from './escolha-calculo/escolha-calculo.component';
import { NgModule } from '@angular/core';


import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    EscolhaCalculoComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
