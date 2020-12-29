import React, { Component } from 'react'

let ListTitle = () => <h1>List</h1>

const BookList = (props) => {

    const { id, title, author, img } = props.books;

    const mappedBooks = props.books.map((element, index) => {
        return (
            <div key={element.id}>
                {element.title}
                {element.author}
                <img src={element.img} />
            </div>
        )
    })

    return (

        <div className="booklist">{mappedBooks}</div>

    );
}



export default BookList;
export { ListTitle };