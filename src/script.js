const libraryBooks = [];

// Them selectors
const bookAdderBtn = document.querySelector(".book-adder");
const bookAdderDialog = document.querySelector(".book-add-dialog");

const dialogCancelBtn = document.querySelector("#cancelBtn");
const dialogConfirmBtn = document.querySelector("#confirmBtn");

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

// Them event listeners
bookAdderBtn.addEventListener("click", () => {
    bookAdderDialog.showModal();
});

dialogCancelBtn.addEventListener("click", () => {
    bookAdderDialog.close();
});