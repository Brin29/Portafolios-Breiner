import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, DashboardComponent ,ProjectsComponent, SkillsComponent, ExperienceComponent, FooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Portafolios-Breiner';
}
