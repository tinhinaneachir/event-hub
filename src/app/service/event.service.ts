import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Event {
  id?: number;
  descirption: string;
  totalSeats: number;
  localDateTime: string;
  title: string;
  date: string;
  location: string;
}

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private apiUrl = 'http://localhost:3000/api/events';

  constructor(private htpp: HttpClient) {}

  getEvents(): Observable<Event[]> {
    return this.htpp.get<Event[]>(this.apiUrl);
  }

  getEventsById(id: number): Observable<Event> {
    return this.htpp.get<Event>(`${this.apiUrl}/${id}`);
  }

  createEvent(event: Event): Observable<Event> {
    return this.htpp.post<Event>(this.apiUrl, event);
  }

  updateEvent(id: number, event: Event): Observable<Event> {
    return this.htpp.put<Event>(`${this.apiUrl}/${id}`, event);
  }

  deleteEvent(id: number): Observable<void> {
    return this.htpp.delete<void>(`${this.apiUrl}/${id}`);
  }
}
