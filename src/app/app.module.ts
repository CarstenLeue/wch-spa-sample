import { LAYOUTS } from './layouts';
import { WchNgModule } from 'ibm-wch-sdk-ng';
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  , ...LAYOUTS],
  imports: [
    BrowserModule,
    AppRoutingModule
  , WchNgModule.forRoot(environment)],
  providers: [],
  entryComponents: [...LAYOUTS],
bootstrap: [AppComponent]
})
export class AppModule { }