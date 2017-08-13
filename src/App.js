import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import logo from './logo.svg';
import BookShelf from './BookShelf'
import SearchBooks from './SearchBooks'
import './App.css';
import * as BooksAPI from './APIs/BooksAPI'


class App extends Component {
    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        showSearchPage: true,
        books : []
    };

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books : books});
        });

    }

    render() {
        return (
            <div className="app">
                <Route path='/search'  render={( {history} ) => (
                    <SearchBooks
                    />
                )}
                />
                <Route exact path='/' render={() => (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <BookShelf
                            books={this.state.books}
                            shelfTitle={"Currently Reading"}
                            shelf={"currentlyReading"}>
                        </BookShelf>
                        <BookShelf
                            books={this.state.books}
                            shelfTitle={"Want To Read"}
                            shelf={"wantToRead"}>
                        </BookShelf>
                        <BookShelf
                            books={this.state.books}
                            shelfTitle={"Read"}
                            shelf={"read"}>
                        </BookShelf>
                        <div className="open-search">
                            <Link className="close-search" to="/search">
                                Add a book
                            </Link>
                        </div>
                    </div>
                )}/>

            </div>
        )
    }
}

export default App;
