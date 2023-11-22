import { Component } from '@angular/core';
import { BookService } from '../Service/booksService';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FiltroComponent {

  constructor(private bookService:BookService){}

  onFilterChange(event:any){
    const value = event.target.value;
    this.bookService.sendFilter(value);
  }

}
