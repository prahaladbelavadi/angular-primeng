import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelsComponent } from './panels/panels.component';

const routes: Routes = [
  {
    path: 'panels', component: PanelsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
