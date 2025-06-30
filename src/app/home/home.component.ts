import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventService, Event } from '../service/event.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  serachTerm = '';

  events: Event[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.getEvents().subscribe({
      next: (data) => (this.events = data),
      error: (err) => console.error('Erreur API:', err),
    });
  }

  filteredEvents(): Event[] {
    return this.events.filter((e) =>
      e.title.toLowerCase().includes(this.serachTerm.toLowerCase())
    );
  }

  viewEvent(event: any) {
    alert(`Voir détails de : ${event.title}`);
  }
}
