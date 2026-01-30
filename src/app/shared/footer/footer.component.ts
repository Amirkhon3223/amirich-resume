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
  private readonly linkService = inject(GeneralService);

  public readonly socialLinks: Social[] = this.linkService.getSocialLinksSync();
  public readonly currentYear: number = new Date().getFullYear();
}
