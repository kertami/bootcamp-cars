import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {filter, map, publishReplay, refCount, switchMap, take, takeUntil} from 'rxjs/operators';
import {CarModelService} from '../../api/services/car-model.service';
import {Observable, of, Subject} from 'rxjs';
import {CarModelDetail} from '../../api/models/car-model-detail';
import {CarType} from '../../api/models';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {
  public formGroup: FormGroup;
  private onDestroy$ = new Subject();
  private id$: Observable<string>;
  public CarType = CarType;
  private details$: Observable<unknown>;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private carModelService: CarModelService) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      make: ['', Validators.required],
      type: [null, Validators.required]
    });
    this.id$ = this.activatedRoute.paramMap.pipe(
      filter(x => x.has('id')),
      map(x => x.get('id'))
    );
    this.details$ = this.id$.pipe(
      switchMap(id => {
        if (id === 'new') {
          return of({});
        } else {
          return this.carModelService.getCarModel$Json({
            id: parseInt(id, 0)
          });
        }
      }),
      takeUntil(this.onDestroy$),
      publishReplay(1),
      refCount()
    );
    this.details$.subscribe(x => this.formGroup.reset(x ? x : {}));
  }
  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
  async save() {
    const id = await this.id$.pipe(take(1)).toPromise();
    if (id === 'new') {
      await this.carModelService.createCarModel$Json$Json({
        body: this.formGroup.value
      }).toPromise();
    } else {
      await this.carModelService.updateCarModel$Json$Json({
        body: this.formGroup.value,
        id: parseInt(id, 0)
      }).toPromise();
    }
    this.router.navigate(['..'], {
      relativeTo: this.activatedRoute
    });
  }
}
