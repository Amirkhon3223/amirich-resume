import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Observable} from "rxjs";
import {Project, ProjectsService} from "../../services/projects.service";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
  projects$!: Observable<Project[]>;
  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit(): void {
    this.projects$ = this.projectsService.getProjects();
  }
}
