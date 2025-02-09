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
        name: "Authentication JWT with microservices",
        description:"A JWT authentication project with Spring Security and microservices secures a REST API by managing user login, token generation, and role-based access control. Security filters validate tokens across services, ensuring secure authentication.",
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
        frontUrl: "https://github.com/Brin29/auth-register-login-front.git",
        backUrl: "https://github.com/Brin29/login-register-microservices.git"
      },
      {
        id: 2,
        name: "Shorten Url System",
        description: "A URL shortening project with Bitly, Spring Boot, and Redis shortens URLs using Bitly's API and caches them in Redis for fast retrieval. It improves performance and scalability by reducing API calls.",
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
        frontUrl: "https://github.com/Brin29/url-short-2.git",
        backUrl: "https://github.com/Brin29/short-url.git"
      },
      {
        id: 3,
        name: "Chat with WebSocket",
        description: "A messaging project with WebSockets, Spring Boot, and Redis enables real-time communication. WebSockets handle live message exchange, while Redis ensures scalability with pub/sub for distributed messaging.",
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
        ],
        backUrl: "https://github.com/Brin29/web-socket.git",
        frontUrl: "https://github.com/Brin29/web-socket.git"
      },
    ]
  }

}
