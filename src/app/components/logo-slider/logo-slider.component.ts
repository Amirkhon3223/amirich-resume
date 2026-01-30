import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TechItem {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-logo-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo-slider.component.html',
  styleUrl: './logo-slider.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoSliderComponent {
  public readonly technologies: TechItem[] = [
    { name: 'Angular', icon: '/assets/images/logos/angular.svg' },
    { name: 'React', icon: '/assets/images/logos/react.svg' },
    { name: 'Vue', icon: '/assets/images/logos/vue.svg' },
    { name: 'TypeScript', icon: '/assets/images/logos/js.svg' },
    { name: 'HTML5', icon: '/assets/images/logos/html.svg' },
    { name: 'CSS3', icon: '/assets/images/logos/css.svg' },
    { name: 'Tailwind', icon: '/assets/images/logos/tailwind.svg' },
    { name: 'Git', icon: '/assets/images/logos/git.svg' },
    { name: 'Bootstrap', icon: '/assets/images/logos/bootstrap.svg' },
  ];
}
