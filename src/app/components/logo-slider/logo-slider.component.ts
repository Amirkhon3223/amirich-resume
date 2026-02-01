import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  AfterViewInit,
  NgZone,
  ChangeDetectorRef
} from '@angular/core';
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
export class LogoSliderComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('container') private containerRef!: ElementRef<HTMLDivElement>;

  // Original items - will be cloned for infinite effect
  private readonly baseItems: TechItem[] = [
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

  // Items array that we'll manipulate
  public items: TechItem[] = [];

  private animationId: number | null = null;
  private speed = 1.5;
  private isHovered = false;
  private itemElements: HTMLElement[] = [];

  constructor(
    private readonly ngZone: NgZone,
    private readonly cdr: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    // Create enough copies to fill screen + buffer
    this.items = [
      ...this.baseItems,
      ...this.baseItems,
      ...this.baseItems,
      ...this.baseItems,
    ];
  }

  public ngAfterViewInit(): void {
    setTimeout(() => {
      this.initializeElements();
      this.startAnimation();
    }, 100);
  }

  public ngOnDestroy(): void {
    this.stopAnimation();
  }

  public onMouseEnter(): void {
    this.isHovered = true;
  }

  public onMouseLeave(): void {
    this.isHovered = false;
  }

  public trackByIndex(index: number): number {
    return index;
  }

  private initializeElements(): void {
    const container = this.containerRef?.nativeElement;
    if (container) {
      this.itemElements = Array.from(container.querySelectorAll('.marquee-item'));
    }
  }

  private startAnimation(): void {
    this.ngZone.runOutsideAngular(() => {
      const positions: number[] = [];
      const gap = 24; // gap between items

      // Initialize positions - line up items horizontally
      let currentX = 0;
      this.itemElements.forEach((el, i) => {
        positions[i] = currentX;
        el.style.left = currentX + 'px';
        currentX += el.offsetWidth + gap;
      });

      const animate = (): void => {
        if (!this.isHovered && this.itemElements.length > 0) {
          // Move all elements left first
          for (let i = 0; i < this.itemElements.length; i++) {
            positions[i] -= this.speed;
          }

          // Check each element if it needs to wrap
          for (let i = 0; i < this.itemElements.length; i++) {
            const el = this.itemElements[i];
            const elWidth = el.offsetWidth;

            // When element goes completely off left side
            if (positions[i] < -elWidth) {
              // Find the rightmost element's right edge
              let maxRightEdge = -Infinity;
              for (let j = 0; j < positions.length; j++) {
                const rightEdge = positions[j] + this.itemElements[j].offsetWidth;
                if (rightEdge > maxRightEdge) {
                  maxRightEdge = rightEdge;
                }
              }
              // Place this element after the rightmost with gap
              positions[i] = maxRightEdge + gap;
            }

            el.style.left = positions[i] + 'px';
          }
        }

        this.animationId = requestAnimationFrame(animate);
      };

      this.animationId = requestAnimationFrame(animate);
    });
  }

  private stopAnimation(): void {
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }
}
