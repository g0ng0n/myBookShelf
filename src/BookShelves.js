import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';

class BookShelves extends Component {
    static PropTypes = {
        books: PropTypes.array.isRequired,
        updateBookShelf: PropTypes.func.isRequired,
    };

    render() {
        const { books, updateBookShelf } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <BookShelf
          books={books}
          shelfTitle={'Currently Reading'}
          shelf={'currentlyReading'}
          updateBookShelf={(book, shelf) => {
            updateBookShelf(book, shelf);
          }}
        />
        <BookShelf
          books={books}
          shelfTitle={'Want To Read'}
          shelf={'wantToRead'}
          updateBookShelf={(book, shelf) => {
            updateBookShelf(book, shelf);
          }}
        />
        <BookShelf
          books={books}
          shelfTitle={'Read'}
          shelf={'read'}
          updateBookShelf={(book, shelf) => {
            updateBookShelf(book, shelf);
          }}
        />
        <div className="open-search">
          <Link className="close-search" to="/search">
            Add a book
          </Link>
        </div>
      </div>
    );
  }
}
export default BookShelves;
