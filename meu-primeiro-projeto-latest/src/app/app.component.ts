import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Componentes
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from "./components/template/template-variables/template-variables.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <h1>Curso de Angular</h1>
    <app-template-binding />
    <app-template-variables />
    `,
    imports: [CommonModule, RouterOutlet, NewComponent, TemplateBindingComponent, TemplateVariablesComponent]
})
export class AppComponent {}
