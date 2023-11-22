import { Component, Input, OnInit } from '@angular/core';

import { BookService } from '../Service/booksService';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  {

  login:boolean;

  arrayBooks:any[];

  constructor(private booksService:BookService){}

  ngOnInit(): void {
    this.arrayBooks = this.booksService.books;
    this.booksService.booksObservable.subscribe(books => this.arrayBooks = books)
  }

  activeLogin(status:boolean){
    this.login = status;
  }

  addBook(newBook:{title:string, author:string, ISBN?: string, loan_date: Date}){
    this.booksService.addBooks(newBook);
  }

}
