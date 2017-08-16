import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import BookShelves from './BookShelves';
import NotFound from './NotFound';
import SearchBooks from './SearchBooks';
import './App.css';
import * as BooksAPI from './BooksAPI';

class App extends Component {
  state = {
    searchBooks: [],

    books: [],
  };

  componentDidMount() {
      this.getBooks();
  }

  getBooks(){
      BooksAPI.getAll().then(books => {
          if (books !== undefined && books.length > 0) {
              this.setState({ books: books });
          }
      });
  }

  searchInBookShelf(query) {
    if (query && query !== '') {
      BooksAPI.search(query, 20).then(books => {

        if (books !== undefined && books.length > 0) {
          this.setState({ searchBooks: books });
        } else {
          if (books.error) {
            this.setState({ searchBooks: [] });
          }
        }
      });
    }
  }

  updateBookShelf(book, shelf) {

      BooksAPI.update(book, shelf).then(() => {
          this.getBooks();
      });
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route
            path="/search"
            render={({ history }) =>
              <SearchBooks
                books={this.state.searchBooks}
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
                <BookShelves
                books={this.state.books}
                updateBookShelf={(book, shelf) => {
                  this.updateBookShelf(book, shelf);
                }}
              />}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
