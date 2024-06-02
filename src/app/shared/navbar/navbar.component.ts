import { Component, ElementRef, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = signal(false);

  constructor(
    private elementRef: ElementRef,
    private router: Router
  ) {
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  }

  toggleMenu(): void {
    this.isMenuOpen.update(value => !value);
  }

  public onNavigateAndScroll(sectionId: string): void {
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        this.scrollToSection(sectionId);
      });
    } else {
      this.scrollToSection(sectionId);
    }
  }
}
