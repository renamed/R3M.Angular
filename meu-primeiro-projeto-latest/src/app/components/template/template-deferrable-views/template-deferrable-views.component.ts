import { Component } from '@angular/core';
import { NewComponent } from "../../new-component/new-component.component";
import { Observable, delay, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-template-deferrable-views',
    standalone: true,
    templateUrl: './template-deferrable-views.component.html',
    styleUrl: './template-deferrable-views.component.scss',
    imports: [NewComponent, CommonModule]
})
export class TemplateDeferrableViewsComponent {
  // public mostrar = false;
  public isTrue = true;
  public isTrue2 = false;

  public loadingData$: Observable<string[]> = of([
    'Item 1',
    'Item 2',
    'Item 3'
  ]).pipe(delay(13000));
}
