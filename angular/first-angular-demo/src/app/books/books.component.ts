import { Component, OnInit } from '@angular/core';

import { Book } from "./book"

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[]
  new_book: Book = new Book
  chosen_book: Book

  constructor() { }

  ngOnInit() {
    this.books = [
      {title: "Lolita", author: "Vladimir Nabokov", pages: 432},
      {title: "And Then There Were None", author: "Agatha Christie", pages: 210},
      {title: "Emma", author: "Jane Austen", pages: 350},
    ]
  }

  create_book(): void {
    this.books.push(this.new_book)
    this.new_book = new Book
  }

  show_book(book: Book): void {
    if(this.chosen_book != book){
      this.chosen_book = book
    } else {
      this.chosen_book = undefined
    }
  }

  update_book(modified_book: Book): void{
    for(let key in modified_book){
      this.chosen_book[key] = modified_book[key]
    }
    this.chosen_book = undefined
  }

}
