import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter } from 'rxjs';
import { Router } from '@angular/router';
import { SubjectsService } from '../../core/services/subjects.service';

@Component({
  selector: 'front-end-internship-assignment-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  bookSearch: FormControl;
  subjectName: string;

  constructor(private _router: Router,
     private subjectsService : SubjectsService) {
    this.bookSearch = new FormControl('');
    this.subjectName = '';
  }

  onSubmit(){
    console.log(this.subjectName)
    let allBooks : any = []
    if (this.subjectName === '' || this.subjectName === ' ') return;
    this._router.navigate([`/trending-subject/${this.subjectName}/2`])
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
