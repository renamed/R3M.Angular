import { Component } from '@angular/core';
import { TesteComponent } from "../teste/teste.component";

@Component({
    selector: 'app-new-component',
    standalone: true,
    templateUrl: './new-component.component.html',
    styleUrl: './new-component.component.scss',
    imports: [TesteComponent]
})
export class NewComponent  {

    public name = 'New Component';

}
