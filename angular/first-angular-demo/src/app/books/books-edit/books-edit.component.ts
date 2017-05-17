import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { Book } from "./../book"

@Component({
  selector: 'app-books-edit',
  templateUrl: './books-edit.component.html',
  styleUrls: ['./books-edit.component.css']
})
export class BooksEditComponent implements OnInit, OnChanges {

  @Input() this_book: Book
  @Output() save = new EventEmitter
  edit_book: Book


  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges() {
    this.edit_book = {title: this.this_book.title, author: this.this_book.author, pages: this.this_book.pages}
  }

  save_book(){
    this.save.emit(this.edit_book)
  }

}
