import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularChartsComponent } from './angular-charts/angular-charts.component';

const routes: Routes = [
  { path:'charts',component:AngularChartsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
