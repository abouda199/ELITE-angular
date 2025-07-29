import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouterOutlet, RouterModule } from '@angular/router';
import { slideInAnimation } from './route-animations';
=======
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { DescriptionComponent } from './description/description.component';
>>>>>>> origin/develop

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterModule],
  animations: [slideInAnimation],
  template: `
    <main [@routeAnimations]="prepareRoute(outlet)">
      <router-outlet #outlet="outlet"></router-outlet>
    </main>
  `
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
=======
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
>>>>>>> origin/develop
