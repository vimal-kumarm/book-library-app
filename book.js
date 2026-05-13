var popupAddBook = document.querySelector('.popup-add-book');
var addbtn = document.querySelector('.addbtn');
var closeBtn = document.querySelector('.close-btn');

addbtn.addEventListener('click', function() {
    popupAddBook.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    popupAddBook.style.display = 'none';
}); 

// Function to add a book (you can implement this as needed)
function addBook() {
    // Get the input values
    var title = document.querySelector('.popup-add-book input[placeholder="Book Title"]').value;
    var author = document.querySelector('.popup-add-book input[placeholder="Author"]').value;
    var description = document.querySelector('.popup-add-book input[placeholder="Description"]').value;
    // Create a new book element (you can customize this as needed)
    var bookElement = document.createElement('div');
    bookElement.setAttribute('class', 'book-card');
    bookElement.innerHTML = `
        <h1 class="book-title">${title}</h1>
        <p><strong>Author:</strong> ${author}</p>
        <p>${description}</p>
        <button class="btn" id="delete-btn" onclick="deleteBook(this)">Delete</button>
    `;
    bookElement.setAttribute('class', 'book-card');
    // Append the new book element to the container (you can customize this as needed)
    document.querySelector('.container').appendChild(bookElement);
    // Close the popup
    closePopup();
}
var detbtn = document.getElementById('delete-btn');
detbtn.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn')) {
        event.target.parentElement.remove();

    }
});
function deleteBook(button) {
    button.parentElement.remove();
}