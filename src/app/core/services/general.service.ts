import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


export interface About {
  id: number;
  title: string;
  text: string;
  icon: string;
}

export interface Social {
  id: number;
  alt: string;
  icon: string;
  href: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private about: About[] = [
    {
      id: 1,
      title: '2 Years Experience',
      text: 'Experience in Front-End development.',
      icon: '/assets/icons/time.svg',
    },
    {
      id: 2,
      title: '7 Projects',
      text: 'From dynamic websites to web applications.',
      icon: '/assets/icons/projects.svg',
    },
    {
      id: 3,
      title: 'Modern Design',
      text: 'My projects blend functionality with stylish design',
      icon: '/assets/icons/layout.svg',
    },
    {
      id: 4,
      title: 'Client-Centric Approach',
      text: 'Guaranteed Quality and Client Satisfaction as the Top Priority.',
      icon: '/assets/icons/client-centric.svg',
    }
  ];
  private socialLinks: Social[] = [
    {
      id: 1,
      name: 'Instagram',
      icon: '/assets/images/logos/instagram.svg',
      alt: 'Amirkhon Instagram, Amirich instagram',
      href: 'https://www.instagram.com/amirkhon_isomadinov/'
    },
    {
      id: 2,
      name: 'Telegram',
      icon: '/assets/images/logos/telegram.svg',
      alt: 'Amirkhon Telegram, Amirich telegram',
      href: 'https://t.me/Amirichvoker'
    },
    {
      id: 3,
      name: 'Linkedin',
      icon: '/assets/images/logos/linkedin.svg',
      alt: 'Amirich Linkedin, Amirkhon linkedin',
      href: 'https://www.linkedin.com/in/amirkhon-isomadinov-30a8561b8/'
    },
    {
      id: 4,
      name: 'Github',
      icon: '/assets/images/logos/github.svg',
      alt: 'Amirich Github, Amirkhon Linkedin',
      href: 'https://github.com/Amirkhon3223'
    },
  ];

  constructor() {
  }

  getSocialLinks(): Observable<Social[]> {
    return of(this.socialLinks);
  }

  getAboutInfo(): Observable<About[]> {
    return of(this.about);
  }
}
