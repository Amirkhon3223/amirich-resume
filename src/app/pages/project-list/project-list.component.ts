import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Project, ProjectsService} from "../../services/projects.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {
  projects$!: Observable<Project[]>;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projects$ = this.projectsService.getProjects();
  }
}
