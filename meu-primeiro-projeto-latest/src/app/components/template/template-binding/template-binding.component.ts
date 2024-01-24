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
  public isDisabled : boolean = true;
  public srcValue: string = "https://images.prismic.io/blogadevindev/58129589-de25-4254-99a9-507859e01db4_angular-logo.png";
  public isTextDecoration: string = this.age >= 37 ? 'underline' : 'none';

  constructor() {
    setTimeout(() => {
      this.name= 'Renato'
    }, 1000);
  }
}
