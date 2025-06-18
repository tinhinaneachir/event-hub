import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
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
      e.title.toLocaleLowerCase().includes(this.serachTerm.toLocaleLowerCase())
    );
  }

  viewEvent(event: any) {
    alert('Voir détails de : ${event.title}');
  }
}
