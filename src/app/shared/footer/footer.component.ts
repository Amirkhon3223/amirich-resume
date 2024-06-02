import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralService, Social } from '../../core/services/general.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  socialLinks!: Observable<Social[]>;

  private linkService = inject(GeneralService);

  ngOnInit(): void {
    this.socialLinks = this.linkService.getSocialLinks();
  }
}
