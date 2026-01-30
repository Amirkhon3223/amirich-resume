import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project, ProjectsService } from '../../core/services/projects.service';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorksComponent {
  private projectsService = inject(ProjectsService);

  readonly projects: Project[] = this.projectsService.getProjects();

  trackByProjectId(index: number, project: Project): number {
    return project.id;
  }
}
