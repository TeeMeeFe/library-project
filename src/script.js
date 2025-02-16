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
const bookBtns = document.querySelectorAll("button#book-btn.book.card");
const bookAdderBtn = document.querySelector("button#book-adder-btn");

// The book constructor
function Book(name, author, yearOfIssue, description) {
    this.name = name;
    this.author = author;
    this.yearOfIssue = yearOfIssue;
    this.description = description;

    return {name, author, yearOfIssue, description};
};

// A function to add books to the front-end
function addBook(arr) {

    // The data
    const name = arr.name;
    const author = arr.author;
    const year = arr.yearOfIssue;
    const desc = arr.description;

    const book = new Book(name, author, year, desc);
    libraryBooks.push(book);
    console.log(libraryBooks);

    // Them elements
    const dialog = document.querySelector(".book-dialog");

    const button = document.createElement("button");
    const image = document.createElement("img");
    const paraName = document.createElement("p");
    const paraAuthor = document.createElement("p");

    // Them attributes
    button.setAttribute("class", "book card");
    button.type = "button";
    button.id = "book-btn";
        
    image.setAttribute("class", "book image-thumb");
    image.src = "";
    image.alt = "book";

    paraName.textContent = name;
    paraAuthor.textContent = author;

    // Append the elements to our container
    button.appendChild(image);
    button.appendChild(paraName);
    button.appendChild(paraAuthor);
    bookContainer.appendChild(button);

    button.addEventListener("click", () => {
        dialog.showModal();
    })

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
/*bookBtns.forEach((btn, i) => {
    // Open the dialog when the corresponding button gets clicked
    btn.addEventListener("click", () => {
        bookDialogs[i].showModal();
    })
});*/

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

    addBook(obj); // adds our books to the screen

    // Close the dialog 
    bookAdderDialog.close();  
});