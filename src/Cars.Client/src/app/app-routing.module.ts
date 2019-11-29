import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'car-models',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'car-models',
    loadChildren: () => import('./car-models/car-models.module').then(x => x.CarModelsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'cars',
    loadChildren: () => import('./cars/cars.module').then(x => x.CarsModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
