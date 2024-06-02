import { Injectable } from '@angular/core';

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
  href: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projectsData: Project[] = [
    {
      id: 1,
      title: 'Ustuvor',
      description: 'Furniture Workshop Ustuvor',
      imageUrl: '/assets/images/ustuvor.jpeg',
      alt: 'Amirkhon Ustuvor',
      href: 'https://ustuvor.netlify.app/'
    },
    {
      id: 2,
      title: 'Job',
      description: 'Site where vacancies will be posted',
      imageUrl: '/assets/images/job.jpeg',
      alt: 'Amirkhon',
      href: 'https://job.karimov.group/'
    },
    {
      id: 3,
      title: 'Job admin panel',
      description: 'Site where vacancies will be posted',
      imageUrl: '/assets/images/admin-panel.jpeg',
      alt: 'Amirkhon',
      href: 'https://github.com/Amirkhon3223/jobAdmin'
    },
    {
      id: 4,
      title: 'IkiTaxi',
      description: 'Iki company, in the field of providing logistics services',
      imageUrl: '/assets/images/iki_taxi.jpeg',
      alt: 'Amirkhon Iki taxi, Amirich Iki taxi',
      href: 'https://iki.taxi/'
    },
    {
      id: 5,
      title: 'Oogway',
      description: 'Creative studio, comics publishing',
      imageUrl: '/assets/images/comics.png',
      alt: 'Amirkhon IOogway, Amirich Oogway, Oogway comics',
      href: 'https://amirkhon3223.github.io/oogway_comics/'
    },
    {
      id: 6,
      title: 'NGO  Art-Activism',
      description: 'NGO, under the Art-Activism project',
      imageUrl: '/assets/images/tutG.jpeg',
      alt: 'Amirkhon Iki taxi, Amirich Iki taxi',
      href: 'https://tut-gallery.tilda.ws/'
    },
  ];

  constructor() {
  }

  getProjects(): Project[] {
    return this.projectsData;
  }
}
