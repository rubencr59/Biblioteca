import { Subject, Observable } from "rxjs";
import { Book } from "../Modelo/book";
import { Injectable } from "@angular/core";

@Injectable()
export class BookService {

    private booksArray:Book[];

    private booksArrayObservable: Subject<Object[]>;
    private filter:Subject<String>;


    constructor(){
        this.booksArray = [
            new Book("El Señor de los Anillos", "J.R.R. Tolkien", "978-84-450-7519-2", new Date(2023, 10, 15)),
            new Book("Cien años de soledad", "Gabriel García Márquez", "978-84-376-0724-7", new Date(2023, 10, 20)),
            new Book("Harry Potter y la piedra filosofal", "J.K. Rowling", "978-84-9838-422-9", new Date(2023, 11, 1)),
            new Book("1984", "George Orwell", "978-84-670-1346-5", new Date(2023, 11, 5))
        ];

        this.booksArrayObservable = new Subject();
        this.filter = new Subject();
    }

    //Esto lo he hecho para comprobar el subcribe del main al array de libros.
    
    addBooks(newBook: { title: string, author: string, ISBN?: string, loan_date: Date }){
        const newISBN = newBook.ISBN || this.generateNewISBN();

        const bookInstance = new Book(newBook.title, newBook.author, newISBN, newBook.loan_date);
    
        this.booksArray.push(bookInstance);
    
        this.booksArrayObservable.next(this.books);
        }

    get books(): Object[]{
        return this.booksArray.map(({ ISBN, ...rest }) => ({ ...rest }));
    }

    get booksObservable(): Observable<Object[]>{
        return this.booksArrayObservable.asObservable();
    }

    private generateNewISBN(): string {
        return 'ISBN-' + Math.random().toString(36).substring(2, 10);
    }


    sendFilter(filter:String){
      this.filter.next(filter);
    }
  
    get Filter(){
      return this.filter.asObservable();
    }

}
