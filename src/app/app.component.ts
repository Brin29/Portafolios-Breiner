import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, DashboardComponent ,ProjectsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Portafolios-Breiner';
}
