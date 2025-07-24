import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CountUpModule } from 'ngx-countup';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [CountUpModule],
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements AfterViewInit {
  @ViewChild('statsSection') statsSection!: ElementRef;
  shouldAnimate = false;

  countUpOptions = {
    duration: 2,
    delay: 0.3,
    startVal: 0,
    suffix: ''
  };

  ngAfterViewInit() {
    // Force l'affichage initial
    setTimeout(() => {
      this.shouldAnimate = true;
    }, 500);

    // Animation au scroll (optionnel)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.shouldAnimate = true;
        }
      });
    }, { threshold: 0.1 });

    observer.observe(this.statsSection.nativeElement);
  }
}