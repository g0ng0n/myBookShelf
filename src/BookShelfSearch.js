import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookShelfSearch extends Component {
  static PropTypes = {
    searchBooks: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
  };

  render() {
    const { searchBooks, updateBookShelf } = this.props;

    return (
      <div className="search-books-results">
        <div className="bookshelf-books">
          <ol className="books-grid">
            {searchBooks.map(book =>
              <li key={book.id}>
                <Book
                  book={book}
                  updateBookShelf={(book, shelf) => {
                    updateBookShelf(book, shelf);
                  }}
                />
              </li>,
            )}
          </ol>
        </div>
      </div>
    );
  }
}
export default BookShelfSearch;
