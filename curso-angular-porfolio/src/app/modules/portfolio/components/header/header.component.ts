import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public ageDevelopment = Math.abs(new Date(Date.now() - new Date("03/11/2008").getTime()).getUTCFullYear() - 1970);;
}
