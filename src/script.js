const libraryBooks = []; // Basic placeholder array to store the books we're adding from the frontend as i'm not handling databases just yet

// Them selectors
const books = document.querySelectorAll("button.book");
const bookContainer = document.querySelector("div.book-container");
const bookDialogs = document.querySelectorAll("#dialogs");
const bookAdderDialog = document.querySelector("dialog.book-add-dialog");
const bookForm = document.querySelector("#book-info"); // The form to add books

// Them dialog selectors
const dialogCancelBtn = document.querySelectorAll("#cancelBtn");
const dialogConfirmBtn = document.querySelector("#confirmBtn");

// Them books button selectors
const bookBtns = document.querySelectorAll("button#book-btn");
const bookAdderBtn = document.querySelector("button#book-adder-btn");

// The book constructor
function Book(name, author, yearOfIssue, description) {
    this.name = name;
    this.author = author;
    this.yearOfIssue = yearOfIssue;
    this.description = description;

    return {name, author, yearOfIssue, description};
};

// A function to add books full stack wise
function addBook(arr) {

    // The data
    const data = arr;

    const name = data.name;
    const author = data.author;
    const year = data.yearOfIssue;
    const desc = data.description;

    const book = new Book(name, author, year, desc);
    console.log(book);

    // Them elements
    const container = document.querySelector(".book-container");

    const button = document.createElement("button");
    const image = document.createElement("img");
    const para = document.createElement("p");

    // Them attributes
    button.setAttribute("type", "button");
    button.setAttribute("class", "book card");
    button.setAttribute("id", "book-btn");
        
    image.setAttribute("class", "book image-thumb");
    image.setAttribute("src", "");
    image.setAttribute("alt", "book");

    para.textContent = name;

    // The dialog and their selectors
    const dialog = document.querySelector(".book-dialog");

    button.appendChild(image);
    button.appendChild(para);
    container.appendChild(button);

    //console.log(dialog);


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

bookAdderBtn.addEventListener("click", () => {
    bookAdderDialog.showModal();
})

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

    // Push our form datae to an array. 
    data.forEach((value, key) => {
        arr.push([key, value]);
    });

    // Convert our array into an object 
    let obj = [Object.fromEntries(arr),];
    obj = obj[0]; 

    addBook(obj);

    // Close the dialog 
    bookAdderDialog.close();  
});