import { Injectable } from '@angular/core';

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
  ];

  constructor() {
  }

  getServices(): Service[] {
    return this.servicesData;
  }
}
