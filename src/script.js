const libraryBooks = []; // Basic placeholder array to store the books we're adding from the frontend as i'm not handling databases just yet

// Them selectors
const books = document.querySelectorAll("button.book");
const bookDialogs = document.querySelectorAll("#dialogs");
const bookForm = document.querySelector("#book-info"); // The form to add books

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
});

dialogCancelBtn.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        bookDialogs[i].close();
    });
});

bookForm.addEventListener("submit", event => {
    // Stop the default submission behavior from occuring
    event.preventDefault();
    // Create a new FormData constructor, firing the FormData event
    new FormData(bookForm);
});

bookForm.addEventListener("formdata", event => {
    console.log("FormData fired");

    // Get the form data and log it
    const data = event.formData;
    data.forEach((value, key) => {
        console.log({key, value});
    });

    // Close the dialog 
    const dialog = document.querySelector(".book-add-dialog");
    dialog.close();  
});