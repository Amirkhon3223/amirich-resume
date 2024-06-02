import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferingsService, Service } from '../../core/services/offerings.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',

})
export class ServicesComponent implements OnInit {
  services: Service[] = [];

  private offeringsService = inject(OfferingsService);

  ngOnInit(): void {
    this.services = this.offeringsService.getServices();
  }

}
