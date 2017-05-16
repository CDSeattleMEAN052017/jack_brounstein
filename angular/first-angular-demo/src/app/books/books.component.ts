import { Component, OnInit } from '@angular/core';

import { Book } from "./book"

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[]
  new_title: string
  new_author: string
  new_pages: number
  new_book: Book = new Book

  constructor() { }

  ngOnInit() {
    this.books = [
      {title: "Lolita", author: "Vladimir Nabokov", pages: 432},
      {title: "And Then There Were None", author: "Agatha Christie", pages: 210},
    ]
  }

  create_book(): void{
    this.books.push(this.new_book)
    this.new_book = new Book
  }

}
