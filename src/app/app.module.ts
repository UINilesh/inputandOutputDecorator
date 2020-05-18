import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputDecoratorComponent } from './input-decorator/input-decorator.component';
import { OutputDecoratorComponent } from './output-decorator/output-decorator.component';

@NgModule({
  declarations: [
    AppComponent,
    InputDecoratorComponent,
    OutputDecoratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
