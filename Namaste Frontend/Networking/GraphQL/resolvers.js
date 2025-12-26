const data = {
    books: [
        { id: '1', title: '1984', publishedYear: 1949, authorId: '1' },
        { id: '2', title: 'Story of India', publishedYear: 1960, authorId: '2' },
        { id: '3', title: 'To Kill a Mockingbird', publishedYear: 1960, authorId: '2' },
        { id: '4', title: 'The Great Gatsby', publishedYear: 1925, authorId: '3' },
        { id: '5', title: 'Moby Dick', publishedYear: 1851, authorId: '3' },
    ],
    authors: [
        { id: '1', name: 'George Orwell', books: [1] },
        { id: '2', name: 'Harper Lee', books: [2, 3] },
        { id: '3', name: 'Herman Melville', books: [4, 5] },
    ],
}

const resolvers = {
    Book: {
        author: (book) => data.authors.find(author => author.id === book.authorId),
    },
    Author: {
        books: (author) => data.books.filter(book => book.authorId === author.id),
    },
    Query: {
        books: () => data.books,
        authors: () => data.authors,
    },
    Mutation: {
        addBook: (parent, args) => {
            const newBook = {
                id: String(data.books.length + 1),
                title: args.title,
                publishedYear: args.publishedYear,
                authorId: args.authorId
            };
            data.books.push(newBook);
            return newBook;
        },
        addAuthor: (parent, args) => {
            const newAuthor = {
                id: String(data.authors.length + 1),
                name: args.name,
                books: []
            };
            data.authors.push(newAuthor);
            return newAuthor;
        }
    }
};

export default resolvers;