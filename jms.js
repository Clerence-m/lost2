function booksByYear(books) {
    const booksByYear = {};
    
    for (let i = 0; i < books.length; i++) {
        const book = books[i];
        const name = book[0];
        const author = book[1];
        const year = book[2];
        
        if (!booksByYear[year]) {
            booksByYear[year] = [];
        }
        
        booksByYear[year].push(name);
    }

    return booksByYear;
}
