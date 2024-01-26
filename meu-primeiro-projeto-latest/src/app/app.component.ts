import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Componentes
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from "./components/template/template-variables/template-variables.component";
import { TemplateControlFlowComponent } from "./components/template/template-control-flow/template-control-flow.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <h1>Curso de Angular</h1>
    <!-- <app-template-binding />
    <app-template-variables /> -->
    <app-template-control-flow />
    `,
    imports: [CommonModule, RouterOutlet, NewComponent, TemplateBindingComponent, TemplateVariablesComponent, TemplateControlFlowComponent]
})
export class AppComponent {}
