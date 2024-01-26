import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name: string = 'Renato Medeiros';
  public beginningAge: number = Math.abs(new Date(Date.now() - new Date("06/11/1987").getTime()).getUTCFullYear() - 1970);
  public age: number = this.beginningAge;
  public condition : string = this.age > 1 ? "Teste" : "Teste 2";
  public isDisabled : boolean = true;
  public srcValue: string = "https://images.prismic.io/blogadevindev/58129589-de25-4254-99a9-507859e01db4_angular-logo.png";
  public isTextDecoration: string = this.age >= 37 ? 'underline' : 'none';

  // constructor() {
  //   setTimeout(() => {
  //     this.name= 'Renato'
  //   }, 1000);
  // }

  public sum() {
    this.age++;
  }

  public sub() {
    this.age--;
  }

  public onKeyDown(event:Event) {
    console.log(event)
  }

  public onMouseMove(event: MouseEvent  ) {
    console.log(event)
  }
}
