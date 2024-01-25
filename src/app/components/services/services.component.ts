import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {OfferingsService, Service} from "../../services/offerings.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',

})
export class ServicesComponent implements OnInit{
  services:Service[] = [];

  constructor(private offeringsService: OfferingsService) {}

  ngOnInit(): void {
    this.services = this.offeringsService.getServices();
  }

}
