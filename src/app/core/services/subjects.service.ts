import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';
import { BookResponse } from 'src/app/core/models/book-response.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(private apiService: ApiService) {}

  getAllBooks(subjectName: string): Observable<BookResponse> {
    const limit = 10;
    return this.apiService.get(`/subjects/${subjectName.toLowerCase().split(' ').join('_')}.json?limit=${limit}`);
  }

  getAllBooks_from_searchAPI(subjectName: string,page:number): Observable<any> {
    const limit = 1;
    return this.apiService.get(`/search.json?q=/${subjectName.toLowerCase().split(' ').join('_')}&${page}=1&limit=10`);  
  }
}
