import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarModelsRoutingModule } from './car-models-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [OverviewComponent, DetailComponent],
  imports: [
    CommonModule,
    CarModelsRoutingModule
  ]
})
export class CarModelsModule { }
