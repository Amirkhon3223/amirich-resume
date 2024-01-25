import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Observable} from "rxjs";
import {Project, ProjectsService} from "../../services/projects.service";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = []
  constructor(private projectsService: ProjectsService) { }


  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
  }
}
