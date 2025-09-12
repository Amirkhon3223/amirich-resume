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
      title: '7+ Years Experience',
      text: 'Frontend development focused on scalable CRM/ERP and high‑load applications.',
      icon: '/assets/icons/time.svg',
    },
    {
      id: 2,
      title: '12+ Production Projects',
      text: 'Food delivery admin panels, pharmacy CRM, legal platforms, restaurant CRM.',
      icon: '/assets/icons/projects.svg',
    },
    {
      id: 3,
      title: 'Angular & React Expert',
      text: 'Angular as core stack + solid React/TypeScript, RxJS/NgRx, Redux, SCSS.',
      icon: '/assets/icons/layout.svg',
    },
    {
      id: 4,
      title: 'NASA Challenge Winner',
      text: 'Global Winner of NASA Space Apps; invited to NASA HQ & Goddard Space Flight Center.',
      icon: '/assets/icons/client-centric.svg',
    }
  ];
  private socialLinks: Social[] = [
    {
      id: 1,
      name: 'Instagram',
      icon: '/assets/images/logos/instagram.svg',
      alt: 'Amirkhon Instagram, Amirich instagram',
      href: 'https://www.instagram.com/amirkhon.isomadinov/'
    },
    {
      id: 2,
      name: 'Telegram',
      icon: '/assets/images/logos/telegram.svg',
      alt: 'Amirkhon Telegram, Amirich telegram',
      href: 'https://t.me/Amirichinvoker'
    },
    {
      id: 3,
      name: 'Linkedin',
      icon: '/assets/images/logos/linkedin.svg',
      alt: 'Amirich Linkedin, Amirkhon linkedin',
      href: 'https://www.linkedin.com/in/amirkhon-isomadinov/'
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
