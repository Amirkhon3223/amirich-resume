import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo-slider.component.html',
  styleUrl: './logo-slider.component.css'
})
export class LogoSliderComponent {
  logos = [
    '/assets/images/logos/git.svg',
    '/assets/images/logos/angular.svg',
    '/assets/images/logos/react.svg',
    '/assets/images/logos/vue.svg',
    '/assets/images/logos/js.svg',
    '/assets/images/logos/html.svg',
    '/assets/images/logos/css.svg',
    '/assets/images/logos/tailwind.svg',
    '/assets/images/logos/bootstrap.svg',
  ];
}
