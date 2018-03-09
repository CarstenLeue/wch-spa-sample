import { LAYOUTS } from './layouts';
import { WchNgModule } from 'ibm-wch-sdk-ng';
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from 'wch-spa-sample-components';

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule, 
    WchNgModule.forRoot(environment)],
  providers: [],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
