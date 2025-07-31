import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { DescriptionComponent } from './description/description.component';
import { FooterComponent } from './footer/footer.component';  // <-- ajoute ceci

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    ImageCarouselComponent,
    DescriptionComponent,
    FooterComponent   // <-- ajoute Footer ici
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
