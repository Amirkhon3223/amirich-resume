import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GeneralService, Social} from "../../../services/general.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  socialLinks!: Observable<Social[]>

  constructor(private linkService: GeneralService
  ) {
  }

  ngOnInit(): void {
    this.socialLinks = this.linkService.getSocialLinks()
  }

}
