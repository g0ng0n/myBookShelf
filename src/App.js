import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';
import SearchBooks from './SearchBooks';
import './App.css';
import * as BooksAPI from './BooksAPI';

class App extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      if (books !== undefined && books.length > 0) {
        this.setState({ books: books });
      }
    });
  }

  searchInBookShelf(query) {
      if (query && query !== ""){
          BooksAPI.search(query, 20).then(books => {
              if (books !== undefined && books.length > 0) {
                  this.setState({ books: books });
              }
          });
      }
  }

  updateBookShelf(book, shelf) {
    BooksAPI.update(book, shelf).then(books => {
      BooksAPI.getAll().then(books => {
        if (books !== undefined && books.length > 0) {
          this.setState({ books: books });
        }
      });
    });
  }

  render() {
    return (
      <div className="app">
        <Route
          path="/search"
          render={({ history }) =>
            <SearchBooks
              books={this.state.books}
              searchInBookShelf={query => {
                this.searchInBookShelf(query);
              }}
              updateBookShelf={(book, shelf) => {
                this.updateBookShelf(book, shelf);
              }}
            />}
        />
        <Route
          exact
          path="/"
          render={() =>
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <BookShelf
                books={this.state.books}
                shelfTitle={'Currently Reading'}
                shelf={'currentlyReading'}
                updateBookShelf={(book, shelf) => {
                  this.updateBookShelf(book, shelf);
                }}
              />
              <BookShelf
                books={this.state.books}
                shelfTitle={'Want To Read'}
                shelf={'wantToRead'}
                updateBookShelf={(book, shelf) => {
                  this.updateBookShelf(book, shelf);
                }}
              />
              <BookShelf
                books={this.state.books}
                shelfTitle={'Read'}
                shelf={'read'}
                updateBookShelf={(book, shelf) => {
                  this.updateBookShelf(book, shelf);
                }}
              />
              <div className="open-search">
                <Link className="close-search" to="/search">
                  Add a book
                </Link>
              </div>
            </div>}
        />
      </div>
    );
  }
}

export default App;
