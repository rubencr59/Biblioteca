import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookService } from '../Service/booksService';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class ListaLibrosComponent implements OnInit {

  @Input() books:any[];
  private subscriptionCommunicator: Subscription;
  private filter:String;
  private originalBooks:any[];
  
  constructor(private bookService:BookService ){}

  ngOnInit() {
    this.originalBooks = this.books;
    this.subscriptionCommunicator = this.bookService.Filter.subscribe(filter => {
      this.filter = filter;
      this.applyFilter();
    });
   }


   private applyFilter() {
    if (this.filter) {
      this.books = this.books.filter(book =>
        book.title.toLowerCase().includes(this.filter.toLowerCase())
      );
    } else{
      this.books = this.originalBooks;
    }
  }


}
