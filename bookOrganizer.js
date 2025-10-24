const books = [
    { title: "To Kill a Mockingbird", authorName: "Harper Lee", releaseYear: 1960 },
    { title: "1984", authorName: "George Orwell", releaseYear: 1949 },
    { title: "The Great Gatsby", authorName: "F. Scott Fitzgerald", releaseYear: 1925 },
    { title: "Brave New World", authorName: "Aldous Huxley", releaseYear: 1932 }
];

// Sort the books by release year in ascending order
function sortByYear(book1, book2){
    if (book1.releaseYear < book2.releaseYear) {
        return -1; 
    } else if (book1.releaseYear > book2.releaseYear) {
        return 1; 
    } else {
        return 0; 
    }
    
}

//Filter out books written after a certain year
const filteredBooks = books.filter(book => book.releaseYear <= 1950);

filteredBooks.sort(sortByYear);

console.log("Filtered and Sorted Books:");
console.log(filteredBooks);
