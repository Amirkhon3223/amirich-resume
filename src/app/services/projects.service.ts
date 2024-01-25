import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

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
      title: 'OCF',
      description: 'NGO Website',
      imageUrl: '/assets/images/ocf.jpeg',
      alt: 'Amirkhon OCF, Amirich OCF',
      href: 'https://freedom.tj/ '
    },
    {
      id: 3,
      title: 'Oogway',
      description: 'Creative studio, comics publishing',
      imageUrl: '/assets/images/comics.png',
      alt: 'Amirkhon IOogway, Amirich Oogway, Oogway comics',
      href: 'https://amirkhon3223.github.io/oogway_comics/'
    },
    // {
    //   id: 4,
    //   title: 'IkiTaxi',
    //   description: 'Iki company, in the field of providing logistics services',
    //   imageUrl: '/assets/images/',
    //   alt: 'Amirkhon Iki taxi, Amirich Iki taxi',
    //   href: 'https://iki.taxi/'
    // },
    // {
    //   id: 5,
    //   title: 'Karimov Job',
    //   description: 'Karimov Job(Iki Job) company where vacancies will be posted',
    //   imageUrl: '/assets/images/',
    //   alt: 'Amirkhon karimov-job, Amirich karimov-job',
    //   href: 'https://job.karimov.group/'
    // },
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
