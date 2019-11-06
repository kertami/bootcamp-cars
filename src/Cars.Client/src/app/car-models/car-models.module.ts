import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarModelsRoutingModule } from './car-models-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { DetailComponent } from './detail/detail.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [OverviewComponent, DetailComponent],
  imports: [
    CommonModule,
    CarModelsRoutingModule,
    ReactiveFormsModule
  ]
})
export class CarModelsModule { }
