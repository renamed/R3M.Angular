import { Component } from '@angular/core';
import { NewComponent } from "../../new-component/new-component.component";

@Component({
    selector: 'app-template-deferrable-views',
    standalone: true,
    templateUrl: './template-deferrable-views.component.html',
    styleUrl: './template-deferrable-views.component.scss',
    imports: [NewComponent]
})
export class TemplateDeferrableViewsComponent {
  public mostrar = false;
}
