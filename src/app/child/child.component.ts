import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  child: any;

  ngOnInit() {
    const childId = this.route.snapshot.paramMap.get('id');
    this.child = {
      id: childId,
      firstName: 'Marie',
      lastName: 'Dupont',
      age: 8,
      educationLevel: 'CP',
      photoUrl: 'https://via.placeholder.com/150',
      certificates: [
        { title: 'Certificat de lecture', date: '2025-07-15' }
      ],
      attendance: [
        { date: '2025-08-01', status: 'Présent' },
        { date: '2025-07-30', status: 'Absent' }
      ],
      history: [
        { date: '2025-07-25', description: 'Séance d\'étude - Mathématiques' },
        { date: '2025-07-28', description: 'Compétition de lecture' }
      ]
    };
  }

  constructor(private route: ActivatedRoute) {}
}