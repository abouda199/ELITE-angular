import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  events = [
    { id: 1, title: 'Compétition de lecture', date: '2025-08-15', spots: 20 },
    { id: 2, title: 'Atelier artistique', date: '2025-08-20', spots: 15 }
  ];

  reserveEvent(eventId: number) {
    // Logique de réservation
    console.log(`Réservation pour l'événement ID ${eventId}`);
  }
}