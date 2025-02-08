import { Component, OnInit } from '@angular/core';
import { Languages, Projects } from '../projects';
@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit{

  projects: Projects[] = [];
  languages: Languages[] = [];

  ngOnInit(): void {      
    this.projects = [
      {
        id: 1,
        name: "Authentication with JWT",
        description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        image: "authentication.webp",
        frontEnd: 
        this.languages = [
          {
            id: 1,
            name: "Angular",
            image: "angular.svg"
          },
          {
            id: 2,
            name: "Tailwind",
            image: "tailwind.svg"
          }
        ],
        backEnd:   
        this.languages = [
          {
            id: 1,
            name: "SpringBoot",
            image: "springboot.svg"
          },
          {
            id: 2,
            name: "MySQL",
            image: "mysql.svg"
          },
          {
            id: 3,
            name: "JWT",
            image: "jwt.svg"
          },
        ],
      },
      {
        id: 2,
        name: "Shorten Url System",
        description: "lorem",
        image: "urlShorten.webp",
        frontEnd: 
        this.languages = [
          {
            id: 1,
            name: "Angular",
            image: "angular.svg"
          },
          {
            id: 2,
            name: "Tailwind",
            image: "tailwind.svg"
          },
        ],
        backEnd:
        this.languages = [
          {
            id: 1,
            name: "SpringBoot",
            image: "springboot.svg"
          },
          {
            id: 2,
            name: "MySQL",
            image: "mysql.svg"
          },
          {
            id: 3,
            name: "Redis",
            image: "redis.svg"
          }
        ],
      },
      {
        id: 3,
        name: "Chat with WebSocket",
        description: "lorem",
        image: "webSocket.webp",
        frontEnd:
        this.languages = [
          {
            id: 1,
            name: "HTML",
            image: "html.svg"
          },
          {
            id: 2,
            name: "CSS",
            image: "css.svg"
          },
          {
            id: 3,
            name: "JavaScript",
            image: "javascript.svg"
          },
        ],
        backEnd: 
        this.languages = [
          {
            id: 1,
            name: "SpringBoot",
            image: "springboot.svg"
          },
          {
            id: 2,
            name: "MySQL",
            image: "mysql.svg"
          }
        ]
      },
    ]
  }

}
