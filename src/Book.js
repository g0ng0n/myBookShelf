import React from 'react'

function Book(props){

    return  <div className='book'>
        <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url('+props.book.imageLinks.thumbnail+')' }}/>
            <div className="book-shelf-changer">
                <select onChange={(event) => props.updateBookShelf(props.book, event.target.value)}>
                    <option value="none" disabled>Move to...</option>
                    <option value="none">None</option>
                    <option defaultValue="currentlyReading">Currently Reading </option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                </select>
            </div>
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.authors}</div>
    </div>

}

export default Book;