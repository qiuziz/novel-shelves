import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseUrl = '/api';
  constructor(private http: HttpClient) { }

  getBook(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}/book/${id}`);
  }

  getBookCatalog(id: string): Observable<Array<any>> {
    return this.http.get<Array<any>>(`${this.baseUrl}/catalog/${id}/`);
  }
}
