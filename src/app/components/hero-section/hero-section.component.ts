import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralService, Social } from '../../core/services/general.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent implements OnInit {
  socialLinks!: Observable<Social[]>;

  private linkService = inject(GeneralService);

  ngOnInit(): void {
    this.socialLinks = this.linkService.getSocialLinks();
  }
}
