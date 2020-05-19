import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputDecoratorComponent } from './input-decorator/input-decorator.component';
import { OutputDecoratorComponent } from './output-decorator/output-decorator.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


const routes: Routes = [
 { path:'', component:InputDecoratorComponent 
},
{
  path:'outputData', component:OutputDecoratorComponent
},
{
  path:'reactiveform', component:ReactiveFormComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
