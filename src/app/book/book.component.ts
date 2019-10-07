import {Component, Input, OnInit} from '@angular/core';

import {BOOKS} from "../mock-books";
import {Book} from "../book";
import {SocialUser} from "angularx-social-login";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  titlePage: string = "Acceuil Général - Livres";
  books: Book[] = BOOKS;
  selectedBook: Book;
  @Input() user: SocialUser;
  @Input() loggedIn: boolean;

  constructor() { }

  ngOnInit() {
  }

  onSelect(Book){
    this.selectedBook = Book;
  }

  createBook(){
   let book = new Book();
   book.title = "Créer par bouton";
   book.name = "PlaceholderName";
   book.description = "PlaceholderDescription";
   book.id = "UneIDIncrémentale";
   book.ref = "UneRefTemporaire";
   this.books.push(book);
  }
}
