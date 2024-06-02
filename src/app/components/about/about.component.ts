import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { About, GeneralService, Social } from '../../core/services/general.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  socialLinks!: Observable<Social[]>;
  aboutInfo!: Observable<About[]>;

  private linkService = inject(GeneralService);
  private aboutExperience = inject(GeneralService);

  ngOnInit(): void {
    this.socialLinks = this.linkService.getSocialLinks();
    this.aboutInfo = this.aboutExperience.getAboutInfo();
  }
}
