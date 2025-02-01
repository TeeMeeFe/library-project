const libraryBooks = [];

// Them selectors
const bookDialogs = document.querySelectorAll("#dialogs");

// Dialog selectors
const dialogCancelBtn = document.querySelectorAll("#cancelBtn");
const dialogConfirmBtn = document.querySelector("#confirmBtn");

// Them books button selectors
const bookBtns = Array.from(document.querySelectorAll("button#book-btn"));

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
bookBtns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        bookDialogs[i].showModal();
    })
})

dialogCancelBtn.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        bookDialogs[i].close();
    });
})


