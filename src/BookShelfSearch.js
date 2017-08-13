import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookShelfSearch extends Component {

    static PropTypes = {
        books: PropTypes.array.isRequired,
    };

    state = {
        moveValue : ''
    };

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {

        const { books} = this.props;

        return (
            <div className="search-books-results">
                <div className="bookshelf-books">
                    <ol className='books-grid'>
                        {books.map((book) => (
                            <li key={book.id} >
                                <div className='book'>
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url('+book.imageLinks.thumbnail+')' }}/>
                                        <div className="book-shelf-changer">
                                            <select value={this.state.moveValue} onChange={this.handleChange}>
                                                <option value="none" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors[0]}</div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>

        );
    }
}
export default BookShelfSearch