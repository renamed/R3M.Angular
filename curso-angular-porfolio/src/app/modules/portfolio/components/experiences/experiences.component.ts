import { Component, signal } from '@angular/core';
import { IExperience } from '../../interface/IExperienceInterface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public experiences = signal<IExperience[]>([
    {
      summary: {
        strong: "Founder",
        p: "RenamedTech | Jan 2024 - Present"
      },
      text: "TDB"
    },
    {
      summary: {
        strong: "Back End Developer",
        p: "Ambev Tech | Jan 2021 - Apr 2022"
      },
      text: "Creation of Critical (validation), Approval and Order Integration microservices, decommissioning a legacy system of more than 25 years old."
    },
    {
      summary: {
        strong: "Back End Developer",
        p: "Junto Seguros | Jan 2020 - Jan 2021"
      },
      text: "Decoupling a legacy system of more than 15 years into microservices, working on the heart of the company, the issuer system."
    },
    {
      summary: {
        strong: "Back End Developer",
        p: "Paraná Banco SA | Aug 2018 - Aug 2019"
      },
      text: "Creation of microservices for simulating/contracting different types of payroll loans."
    }
  ]);
}
