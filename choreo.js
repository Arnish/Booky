const theLib = [];


//constructor function
function Book(title,author,pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

const formStuff = document.getElementById("formy");
formStuff.addEventListener('submit', (event) => { //not sure why this doesnt work without the event function part... 
    event.preventDefault();//prevents the submit. what this means is that you can take the user input manually below and use it in a different way!

    const testForm = formStuff.elements.bookTitle.value;
    console.log(testForm);

    document.getElementById("modalBG").style.display = "none"; //closes the modal once done
    document.getElementById("modalContent").style.display = "none";
});
// console.log(formy.elements.name.value);
//const bookAdder = new Book()

//add button, make a close button later! ()
const addBookBtn = document.getElementById("addBook");
addBookBtn.addEventListener("click", function () {
    document.getElementById("modalBG").style.display = "flex";
    document.getElementById("modalContent").style.display = "flex";
});


/*to do :
-get form imput and feed into the constructor function
-make close button for the modal and set display value back to none
*/