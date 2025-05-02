import { useState } from 'react';

export default function Bookshelf() {
    // ** States **
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' }
    ])

    const [newBook, setNewBook] = useState({
        title: '', author: ''
    })

    // ** Functions **
    function handleInputChange(event) {
        setNewBook({
            ...newBook,
            [event.target.name]:
                event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        setBooks([...books, newBook ])
        setNewBook({
            title: '', author: ''
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {/* Title */}
                <div>
                    <label htmlFor="title">Title: </label>
                    <input
                        id="title"
                        name="title"
                        value={books.title}
                        onChange={handleInputChange}
                    />
                </div>

                {/* Author */}
                <div>
                    <label htmlFor="author">Author: </label>
                    <input
                        id="author"
                        name="author"
                        value={books.author}
                        onChange={handleInputChange}
                    />
                </div>

                {/* Submit btn */}
                <button type="submit">Add your book </button>
            </form>

            <div className="bookCardsDiv">
            {/* Book Card */}
            {books.map((book) => (
                <div className="card" >
                    <h2>{book.title}</h2>
                    <h3>{book.author}</h3>
                </div>
            ))}
            </div>
        </>
    )

}


