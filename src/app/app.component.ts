import { Component } from '@angular/core';
import { FooterComponent } from "./components/general/footer/footer.component";
import { NavbarComponent } from "./components/general/navbar/navbar.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FooterComponent,
    NavbarComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Amirich';
}
