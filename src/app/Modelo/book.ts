export class Book {

    title:String;

    author:String;

    ISBN:String;

    loan_date:Date;

    constructor(title: string, author: string, ISBN: string, loan_date: Date) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.loan_date = loan_date;
      }

}
