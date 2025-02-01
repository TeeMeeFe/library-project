const libraryBooks = []; // Basic placeholder array to store the books we're adding from the frontend as i'm not handling databases just yet

// Them selectors
const bookDialogs = document.querySelectorAll("#dialogs");

// Them dialog selectors
const dialogCancelBtn = document.querySelectorAll("#cancelBtn");
const dialogConfirmBtn = document.querySelector("#confirmBtn");

// Them books button selectors
const bookBtns = document.querySelectorAll("button#book-btn");

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


