import { Component } from '@angular/core';
import { Adal8Service } from 'adal-angular8';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  constructor(
    private adalService: Adal8Service
  ) {
    adalService.init(environment.adal);
    adalService.handleWindowCallback();
  }
}
