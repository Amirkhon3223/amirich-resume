import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferingsService, Service } from '../../core/services/offerings.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesComponent {
  private offeringsService = inject(OfferingsService);

  readonly services: Service[] = this.offeringsService.getServices();

  trackByServiceId(index: number, service: Service): number {
    return service.id;
  }
}
