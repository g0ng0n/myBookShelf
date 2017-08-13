import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {

    static PropTypes = {
        books: PropTypes.array.isRequired,
        shelf: PropTypes.string.isRequired,
        shelfTitle: PropTypes.string.isRequired,
        updateBookShelf: PropTypes.func.isRequired
    };


    render() {
        const { books, shelf, shelfTitle, updateBookShelf } = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className='books-grid'>
                        {books.filter(book => book.shelf === shelf).map((book) => (
                            <li key={book.id} >
                                <Book
                                    book={book}
                                    updateBookShelf={(book,shelf) =>{
                                        updateBookShelf(book,shelf);
                                    }}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>

        )
    }
}
export default BookShelf;