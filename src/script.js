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

// A function to key our objects by their names 
function groupByName(arr) {
    return arr.reduce((obj, value) => {
        obj[value.name] = value
        return obj
    }, {});
};

// Them event listeners
bookBtns.forEach((btn, i) => {
    // Open the dialog when the corresponding button gets clicked
    btn.addEventListener("click", () => {
        bookDialogs[i].showModal();
    })
});

dialogCancelBtn.forEach((btn, i) => {
    // Close the dialog when the corresponding button gets clicked
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

    // Get the form data from the event
    const data = event.formData;
    const arr = [];

    // Push our form datae to an array
    data.forEach((value, key) => {
        arr.push([key, value]);
    });

    let obj = [Object.fromEntries(arr),];

    // Send the object back to our libraryBooks array
    const bookArr = groupByName(obj);
    libraryBooks.push(bookArr);

    console.log(bookArr);

    // Close the dialog 
    const dialog = document.querySelector(".book-add-dialog");
    dialog.close();  
});