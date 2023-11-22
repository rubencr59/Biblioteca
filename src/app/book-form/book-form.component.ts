import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {

  @Output() newBook = new EventEmitter<any>();

  createNewBook(newBook:{title:String, author:String, loan_date: string}){
    const createBook = {
      title: newBook.title,
      author: newBook.author,
      loan_date: new Date(newBook.loan_date)  
  };
    this.newBook.emit(createBook)
  }

}
