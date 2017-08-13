import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'

import BookShelf from './BookShelf'

class SearchBooks extends Component {

    static PropTypes = {
        books: PropTypes.array.isRequired,
        shelf: PropTypes.string.isRequired,
        shelfTitle: PropTypes.string.isRequired
    };

    state = {
        query: ''
    };

    updateQuery = (query) => {
        BooksAPI.getAll().then((books) => {
            this.setState({books : books})
        });
    };

    render() {
        const { books, shelf, query, shelfTitle } = this.props;

        let showingBooks;
        if (query){
            const match = new RegExp(escapeRegExp(query), 'i');
            showingBooks = books.filter((book) => match.test(book.name))

        }else{
            showingBooks = books
        }

        return (

            <div className="search-books">

                <div className="search-books-bar">
                    <Link className="close-search" to="/">
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        {/*
                         NOTES: The search from BooksAPI is limited to a particular set of search terms.
                         You can find these search terms here:
                         https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                         However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                         you don't find a specific author or title. Every search is limited by search terms.
                         */}
                        <input type="text" placeholder="Search by title or author"
                               value={this.state.query}
                               onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <BookShelf
                        books={showingBooks}
                        shelfTitle={""}
                        shelf={""}>
                    </BookShelf>
                </div>
            </div>

            );
    }
}
export default SearchBooks