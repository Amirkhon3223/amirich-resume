import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

export interface Service {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  link: string;

}


@Injectable({
  providedIn: 'root'
})
export class OfferingsService {


  private servicesData: Service[] = [
    {
      id: 1,
      name: 'Website Applications',
      description: 'Custom web apps crafted for seamless API integration, enhanced functionality, and tailored to client needs using frameworks like Angular or Vue.',
      imageUrl: '/assets/images/Services/Web.png',
      link: '/',
    },
    {
      id: 2,
      name: 'Responsive Design',
      description: 'Layouts adapting flawlessly to diverse devices, ensuring smooth API integration for dynamic content and interactions.',
      imageUrl: '/assets/images/Services/Response.png',
      link: '/',
    },
    // {
    //   id: 3,
    //   name: 'Single Page Applications (SPAs)',
    //   description: 'Fluid user experiences with SPAs, eliminating page reloads, and incorporating seamless API integration for real-time updates and interactive features.',
    //   imageUrl: '/assets/images/Services/SWA.png',
    //   link: '/',
    // },
    // {
    //   id: 4,
    //   name: 'Progressive Web Apps (PWAs)',
    //   description: 'Web solutions mirroring mobile app features, with API integration for offline access, push notifications, and enhanced interactivity.',
    //   imageUrl: '/assets/images/Services/PWA.png',
    //   link: '/',
    // },
  ];

  constructor() {
  }

  getServices(): Observable<Service[]> {
    return of(this.servicesData);
  }
}
