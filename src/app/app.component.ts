import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter } from 'rxjs';

@Component({
  selector: 'front-end-internship-assignment-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  bookSearch: FormControl;

  constructor() {
    this.bookSearch = new FormControl('');
  }

  trendingSubjects: Array<any> = [
    { name: 'JavaScript' },
    { name: 'CSS' },
    { name: 'HTML' },
    { name: 'Harry Potter' },
    { name: 'Crypto' },
  ];

  ngOnInit(): void {
    this.bookSearch.valueChanges
      .pipe(
        debounceTime(300),
      ).
      subscribe((value: string) => {
      });
  }
}

