import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralService, Social } from '../../core/services/general.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  private linkService = inject(GeneralService);

  readonly socialLinks: Social[] = this.linkService.getSocialLinksSync();
  readonly currentYear = new Date().getFullYear();

  trackBySocialId(index: number, link: Social): number {
    return link.id;
  }
}
