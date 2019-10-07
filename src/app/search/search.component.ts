import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";

import {Book} from "../book";
import {BOOKS} from "../mock-books";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searchBooks: EventEmitter<Book[]> = new EventEmitter();
  @Input() result: Book;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm): void {

    for(let aBook of BOOKS)
    {
    if(form.value['word'] == aBook.title)
    {
      this.result = aBook;
    }
    }

    console.log(this.result);
  }
}
