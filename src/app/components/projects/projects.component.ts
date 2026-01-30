import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
  href: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  readonly projects: Project[] = [
    {
      id: 1,
      title: 'LexFlow',
      description: 'Legal practice management system with AI assistant',
      imageUrl: '/assets/images/lex-flow.png',
      alt: 'LexFlow Legal Management',
      href: 'https://lex-flow.com/'
    },
    {
      id: 2,
      title: 'Oogway Comics',
      description: 'Tajikistan\'s first independent comic publishing house',
      imageUrl: '/assets/images/oogway-comics.png',
      alt: 'Oogway Comics Studio',
      href: 'https://oogwaycomics.com/'
    },
    {
      id: 3,
      title: 'DRNY Mobile Diagnostics',
      description: 'Mobile auto diagnostics and repair service (OEM standards)',
      imageUrl: '/assets/images/drny.jpeg',
      alt: 'DRNY Mobile Auto Diagnostics',
      href: 'https://drny.us/'
    },
    {
      id: 4,
      title: 'Prime Drive Auto Body',
      description: 'Auto body repair and painting service landing page',
      imageUrl: '/assets/images/prime-drive.jpeg',
      alt: 'Prime Drive Auto Body Service',
      href: 'https://prime-drive.netlify.app/'
    },
    {
      id: 5,
      title: 'Ustuvor',
      description: 'Furniture Workshop Ustuvor',
      imageUrl: '/assets/images/ustuvor.jpeg',
      alt: 'Amirkhon Ustuvor',
      href: 'https://ustuvor.netlify.app/'
    },
    {
      id: 6,
      title: 'Brooklyn Cosmetology',
      description: 'Cosmetology services landing page',
      imageUrl: '/assets/images/brooklyn-cosmetology.jpeg',
      alt: 'Brooklyn Cosmetology Services',
      href: 'https://brooklyn-casmetolog.netlify.app/'
    },
    {
      id: 7,
      title: 'NGO Art-Activism',
      description: 'NGO, under the Art-Activism project',
      imageUrl: '/assets/images/tutG.jpeg',
      alt: 'NGO Art-Activism Gallery',
      href: 'https://tut-gallery.tilda.ws/'
    },
    {
      id: 8,
      title: 'IkiTaxi',
      description: 'Iki company, in the field of providing logistics services',
      imageUrl: '/assets/images/iki_taxi.jpeg',
      alt: 'IkiTaxi',
      href: 'https://iki.taxi/'
    },
    {
      id: 9,
      title: 'Oogway',
      description: 'Creative studio, comics publishing',
      imageUrl: '/assets/images/comics.png',
      alt: 'Oogway comics',
      href: 'https://amirkhon3223.github.io/oogway_comics/'
    },
    {
      id: 10,
      title: 'Job',
      description: 'Site where vacancies will be posted',
      imageUrl: '/assets/images/job.jpeg',
      alt: 'Job Portal',
      href: 'https://job.karimov.group/'
    },
    {
      id: 11,
      title: 'Job admin panel',
      description: 'Admin panel for job portal management',
      imageUrl: '/assets/images/admin-panel.jpeg',
      alt: 'Job Admin Panel',
      href: 'https://github.com/Amirkhon3223/jobAdmin'
    },
  ];

  trackByProjectId(index: number, project: Project): number {
    return project.id;
  }
}
