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
  private generalService = inject(GeneralService);

  readonly socialLinks: Social[] = this.generalService.getSocialLinksSync();
  readonly aboutInfo: About[] = this.generalService.getAboutInfoSync();

  readonly skills: string[] = [
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

  trackBySkill(index: number, skill: string): string {
    return skill;
  }

  trackByAboutId(index: number, item: About): number {
    return item.id;
  }
}
