import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { About, GeneralService, Social } from '../../core/services/general.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  private readonly generalService = inject(GeneralService);

  public readonly socialLinks: Social[] = this.generalService.getSocialLinksSync();
  public readonly aboutInfo: About[] = this.generalService.getAboutInfoSync();

  public readonly skills: string[] = [
    'Angular',
    'React',
    'TypeScript',
    'JavaScript',
    'Go',
    'RxJS',
    'NgRx',
    'NGXS',
    'Redux',
    'Zustand',
    'Node.js',
    'Python',
    'SCSS',
    'Tailwind',
    'Docker',
    'CI/CD',
  ];
}
