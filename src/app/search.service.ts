import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Novels } from './novels';

const NOVELS = [
  {
    name: '奶爸的文艺人生',
    author: '寒门',
    updateTime: '2018-07-18 00:00:00',
    state: '完成'
  }
];

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private baseUrl = '/search/';
  constructor(private http: HttpClient) { }

  getNovels(name: string): Observable<Novels[]> {
    return this.http.get<Novels[]>(`${this.baseUrl}?name=${name}`);
  }
}
