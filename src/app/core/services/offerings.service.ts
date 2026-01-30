import { Injectable } from '@angular/core';

export interface Service {
  id: number;
  name: string;
  description: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class OfferingsService {
  private servicesData: Service[] = [
    {
      id: 1,
      name: 'Web Applications',
      description: 'Custom web apps with Angular, React, or Vue. Scalable architecture for CRM, ERP, and high-load platforms.',
      icon: 'code',
    },
    {
      id: 2,
      name: 'Responsive Design',
      description: 'Pixel-perfect interfaces that adapt seamlessly across all devices and screen sizes.',
      icon: 'device',
    },
    {
      id: 3,
      name: 'API Integration',
      description: 'Seamless integration with REST APIs, GraphQL, and third-party services.',
      icon: 'api',
    },
    {
      id: 4,
      name: 'Performance',
      description: 'Optimized applications with fast load times, lazy loading, and efficient state management.',
      icon: 'speed',
    },
  ];

  getServices(): Service[] {
    return this.servicesData;
  }
}
