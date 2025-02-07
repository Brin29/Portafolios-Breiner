import { Component, OnInit } from '@angular/core';
import { Projects } from '../projects';
@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit{

  projects: Projects[] = [];

  ngOnInit(): void {      
    this.projects = [
      {
        id: 1,
        name: "Authorization with JWT",
        description: "lorem",
        image: "#/",
        frontEnd: ["", ""],
        backEnd: ["", ""],
        frontUrl: "sa",
        backUrl: "sa",
      },
      {
        id: 2,
        name: "Shorten Url System",
        description: "lorem",
        image: "#/",
        frontEnd: ["", ""],
        backEnd: ["", ""],
        frontUrl: "sa",
        backUrl: "sa",
      },
      {
        id: 3,
        name: "Chat with WebSocket",
        description: "lorem",
        image: "#/",
        frontEnd: ["", ""],
        backEnd: ["", ""],
        frontUrl: "sa",
        backUrl: "sa",
      },

    ]
  }

}
