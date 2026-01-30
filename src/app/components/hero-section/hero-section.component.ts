import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralService, Social } from '../../core/services/general.service';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSectionComponent {
  private linkService = inject(GeneralService);

  readonly socialLinks: Social[] = this.linkService.getSocialLinksSync();

  trackBySocialId(index: number, link: Social): number {
    return link.id;
  }
}
