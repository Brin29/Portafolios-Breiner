import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, DashboardComponent ,ProjectsComponent, SkillsComponent, ExperienceComponent, ContactComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Portafolios-Breiner';
}
