import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name: string = 'Renato Medeiros';
  public age: number = Math.abs(new Date(Date.now() - new Date("06/11/1987").getTime()).getUTCFullYear() - 1970);
  public condition : string = this.age > 1 ? "Teste" : "Teste 2";
}
