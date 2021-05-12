import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ConfigComponent } from './config/component/config/config.component'; // importa el modulo

@NgModule({
  imports: [
    BrowserModule,
    // importa el HttpClientModule después del BrowserModule
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    ConfigComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}