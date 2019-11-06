import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { DetailComponent } from './detail/detail.component';
import { OverviewComponent } from './overview/overview.component';


@NgModule({
  declarations: [DetailComponent, OverviewComponent],
  imports: [
    CommonModule,
    CarsRoutingModule
  ]
})
export class CarsModule { }
