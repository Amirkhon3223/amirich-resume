import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project, ProjectsService } from '../../core/services/projects.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  private projectsService = inject(ProjectsService);

  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
  }
}
