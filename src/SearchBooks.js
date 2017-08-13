import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelfSearch from './BookShelfSearch'

class SearchBooks extends Component {

    static PropTypes = {
        books: PropTypes.array.isRequired,
        searchInBookShelf: PropTypes.func.isRequired,
        updateBookShelf: PropTypes.func.isRequired

    };


    render() {
        const {books, searchInBookShelf, updateBookShelf } = this.props;

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
                        <input type="text"
                               placeholder="Search by title or author"
                               onChange={(event) => {
                                   let query =  event.target.value !== undefined ? event.target.value : " ";
                                   searchInBookShelf(query)
                               }}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <BookShelfSearch
                        books={books}
                        updateBookShelf={(book,shelf) =>{
                            updateBookShelf(book,shelf);
                        }}>
                    </BookShelfSearch>
                </div>
            </div>

            );
    }
}
export default SearchBooks