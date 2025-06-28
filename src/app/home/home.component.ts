import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'], // ← attention au "styleUrls"
})
export class HomeComponent {
  serachTerm = '';

  events = [
    {
      title: 'Conférence Tech 2025',
      date: new Date('2025-07-12'),
      location: 'Paris',
    },
    {
      title: 'Festival Musique Libre',
      date: new Date('2025-08-05'),
      location: 'Lyon',
    },
    {
      title: 'Salon du Livre',
      date: new Date('2025-09-18'),
      location: 'Toulouse',
    },
  ];

  filteredEvents() {
    return this.events.filter((e) =>
      e.title.toLowerCase().includes(this.serachTerm.toLowerCase())
    );
  }

  viewEvent(event: any) {
    alert(`Voir détails de : ${event.title}`);
  }
}
