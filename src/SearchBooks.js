import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelfSearch from './BookShelfSearch';

class SearchBooks extends Component {
  render() {
    const {
      searchBooks,
      books,
      searchInBookShelf,
      updateBookShelf,
    } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={event => {
                let query =
                  event.target.value !== undefined ? event.target.value : '';
                searchInBookShelf(query);
              }}
            />
          </div>
        </div>
        <div className="search-books-results">
          <BookShelfSearch
            searchBooks={searchBooks}
            books={books}
            updateBookShelf={(book, shelf) => {
              updateBookShelf(book, shelf);
            }}
          />
        </div>
      </div>
    );
  }
}

SearchBooks.PropTypes = {
  books: PropTypes.array.isRequired,
  searchInBookShelf: PropTypes.func.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};

export default SearchBooks;
