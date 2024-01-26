import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {
  trackFn = (index: number) => index;

  AddNewName(value: string) {
    this.items = [...this.items, { name: value }]
  }

  AddNewName2(value: string) {
    this.emptyItems = [...this.emptyItems, { name: value }]
  }

  public isTrue = false;

  public loadingData$: Observable<string[]> = of([
    'item 1',
    'item 2',
    'item 3'
  ]).pipe(delay(3000));

  public items = [ {name : 'Renato Medeiros'} ]
  public emptyItems: Array<{ name: string }> = [];  
}


