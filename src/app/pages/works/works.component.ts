import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project, ProjectsService } from '../../core/services/projects.service';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent implements OnInit{
  projects: Project[] = [];

  private projectsService = inject(ProjectsService);

  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
  }
}
