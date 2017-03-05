import { Component } from '@angular/core';
import {Project} from "./models/project";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private listProject: Array<Project>;

  constructor() {
    const projectA = new Project();
    projectA.projectCode = 'opentalk';
    projectA.projectName = 'OpenTalk';
    projectA.description = 'team collabration';
    const projectB = new Project();
    projectB.projectCode = 'teampm';
    projectB.projectName = 'teampm';
    projectB.description = 'project management.';
    this.listProject = new Array();
    this.listProject.push(projectA);
    this.listProject.push(projectB);
  }
}
