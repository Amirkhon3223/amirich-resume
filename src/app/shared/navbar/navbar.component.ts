import { Component, NgZone, OnInit, OnDestroy, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit, OnDestroy {
  public readonly isMenuOpen = signal(false);
  public readonly isScrolled = signal(false);

  private scrollListener: (() => void) | null = null;

  constructor(
    private readonly router: Router,
    private readonly ngZone: NgZone
  ) {}

  public ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.scrollListener = (): void => {
        const scrolled = window.scrollY > 50;
        if (this.isScrolled() !== scrolled) {
          this.ngZone.run(() => this.isScrolled.set(scrolled));
        }
      };
      window.addEventListener('scroll', this.scrollListener, { passive: true });
    });
  }

  public ngOnDestroy(): void {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  public toggleMenu(): void {
    this.isMenuOpen.update(value => !value);
  }

  public onNavigateAndScroll(sectionId: string): void {
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => this.scrollToSection(sectionId), 100);
      });
    } else {
      this.scrollToSection(sectionId);
    }
  }

  private scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth'
      });
    }
  }
}
