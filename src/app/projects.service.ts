import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projects } from './projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService implements OnInit{

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

  constructor(private http: HttpClient) { }
}
