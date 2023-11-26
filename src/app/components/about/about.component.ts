import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Observable} from "rxjs";
import {About, GeneralService, Social} from "../../services/general.service";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  socialLinks!: Observable<Social[]>;
  aboutInfo!: Observable<About[]>;

  constructor(
    private linkService: GeneralService,
    private aboutExperience: GeneralService
  ) {
  }

  ngOnInit(): void {
    this.socialLinks = this.linkService.getSocialLinks();
    this.aboutInfo = this.aboutExperience.getAboutInfo();
  }
}
