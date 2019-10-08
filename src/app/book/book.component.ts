import {Component, Input, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';

import {BOOKS, SECRETBOOKS} from "../mock-books";
import {Book} from "../book";
import {SocialUser} from "angularx-social-login";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Book[] = BOOKS;
  secretBooks: Book[] = SECRETBOOKS;
  selectedBook: Book;
  @Input() user: SocialUser;
  @Input() loggedIn: boolean;
  newName = new FormControl('');
  newTitle = new FormControl('');
  newID = new FormControl('');
  newRef = new FormControl('');
  newDescription = new FormControl('');
  isToUpdate: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSelect(Book){
    this.selectedBook = Book;
  }

  onDelete(Book){
    BOOKS.splice(BOOKS.indexOf(Book),1);
  }

  onSecretDelete(Book){
    SECRETBOOKS.splice(SECRETBOOKS.indexOf(Book),1);
  }

  createBook(newID: string, newName: string, newTitle: string, newRef: string, newDescription: string){
   let book = new Book();
   book.title = this.newTitle.value;
   book.name = this.newName.value;
   book.description = this.newDescription.value;
   book.id = this.newID.value;
   book.ref = this.newRef.value;
   this.books.push(book);
  }

  editBook(selectedBook : Book, newID: string,newName: string,newTitle: string,newRef: string,newDescription: string){
  selectedBook.id = this.newID.value;
  selectedBook.name = this.newName.value;
  selectedBook.title = this.newTitle.value;
  selectedBook.ref = this.newRef.value;
  selectedBook.description = this.newDescription.value;
  }

  toggleUpdate()
  {
    if(this.isToUpdate === false)
    {
      this.isToUpdate = true;
    }else{
      this.isToUpdate = false;
    }
    console.log(this.isToUpdate);
  }
}
