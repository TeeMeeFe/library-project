const libraryBooks = [];

// Them selectors
const bookAdderBtn = document.querySelector(".book-adder");
const bookAdderDialog = document.querySelector("dialog");

// The book constructor
function Book(name, author, yearOfIssue, description) {
    this.name = name;
    this.author = author;
    this.yearOfIssue = year;
    this.description = desc;

    return {name, author, year, desc};
};

function addBook() {

};

bookAdderBtn.addEventListener("click", () => {
    bookAdderDialog.showModal();
});