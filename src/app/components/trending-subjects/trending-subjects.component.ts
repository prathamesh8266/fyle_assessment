import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SubjectsService } from '../../core/services/subjects.service';
import { Book } from 'src/app/core/models/book-response.model';
import { APIResponse } from 'src/app/core/models/search-API-response';

@Component({
  selector: 'front-end-internship-assignment-trending-subjects',
  templateUrl: './trending-subjects.component.html',
  styleUrls: ['./trending-subjects.component.scss'],
})
export class TrendingSubjectsComponent implements OnInit {

  isLoading: boolean = true;
  subjectName: string = '';
  routeId : string = '0';
  allBooks: any[] = [];
  // searchResponse : any[];

  constructor(
    private route: ActivatedRoute,
    private subjectsService: SubjectsService
  ) {
  }

  getAllBooks() {
    this.subjectsService.getAllBooks(this.subjectName)?.subscribe((data) => {
      let len = data?.works.length;
      this.allBooks = [];
      for(let i=0;i<len&&i<10;i++){
        let author = {name : "unknown"};
        if(data.works[i]?.authors?.length > 0){
          author.name = data.works[i].authors[0].name;
        }
        this.allBooks.push({author : author , title : data.works[i].title , first_publish_year : data.works[i].first_publish_year})
      }
      // console.log(this.allBooks);
      this.isLoading = false;
    });
  }

  getAllBooks_from_searchAPI(){
    if (this.subjectName == '') return
    this.subjectsService.getAllBooks_from_searchAPI(this.subjectName,1)?.subscribe((data) => {
      let len = data?.docs.length;
      this.allBooks = [];
      console.log(data?.docs);
      for(let i=0;i<10;i++){
        let author = {name : "unknown"};
        if(data.docs[i]?.author_name?.length > 0){
          author.name = data.docs[i].author_name[0];
        }
        this.allBooks.push({author : author , title : data.docs[i].title , first_publish_year : data.docs[i].first_publish_year})
      }
      // console.log(this.allBooks);
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.subjectName = params.get('name') || '';
      this.routeId = params.get('routeId') || "0";
      console.log(this.routeId)
      console.log(params)
      this.isLoading = true;
      if (this.routeId === '1') {
        this.getAllBooks();
      }if (this.routeId === '2') {
        this.getAllBooks_from_searchAPI();
      }
    });
  }

}
