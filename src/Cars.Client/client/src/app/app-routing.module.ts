import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'car-models', pathMatch: 'full'},
  { path: 'car-models', loadChildren: () => import('./car-models/car-models.module').then(x => x.CarModelsModule) },
  { path: 'cars', loadChildren: () => import('./cars/cars.module').then(x => x.CarsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
