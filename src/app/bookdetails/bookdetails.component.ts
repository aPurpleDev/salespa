import { Component, OnInit, Input } from '@angular/core';
import { Book} from "../book";

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {

  @Input() book: Book;

  constructor() { }

  ngOnInit() {

  }

}
