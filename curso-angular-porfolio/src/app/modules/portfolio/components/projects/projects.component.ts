import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjectsInterface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public projects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Unify',
      title: 'Unify',
      width: '100px',
      height: '51px',
      description: '<p>Integração entre vários sistemas existentes.</p>',
      links: [
        {
          name: 'Conheça o projeto',
          href: ''
        }
      ]
    }
  ]);
}
