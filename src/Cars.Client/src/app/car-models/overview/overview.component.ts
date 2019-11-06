import { Component, OnInit } from '@angular/core';
import {CarModelService} from '../../api/services/car-model.service';
import {Observable} from 'rxjs';
import {CarModelSummary} from '../../api/models';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  private carModels$: Observable<Array<CarModelSummary>>;

  constructor(private carModelService: CarModelService) { }

  ngOnInit() {
    this.carModels$ = this.carModelService.getAllCarModels$Json();
  }

}
