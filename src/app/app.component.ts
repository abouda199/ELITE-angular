import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { DescriptionComponent } from './description/description.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    ImageCarouselComponent,  // ✅ important
    DescriptionComponent     // ✅ important
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
