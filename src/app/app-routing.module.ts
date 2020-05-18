import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputDecoratorComponent } from './input-decorator/input-decorator.component';
import { OutputDecoratorComponent } from './output-decorator/output-decorator.component';


const routes: Routes = [
 { path:'', component:InputDecoratorComponent 
},
{
  path:'outputData', component:OutputDecoratorComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
