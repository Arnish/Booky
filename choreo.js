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

    //stores the input values from the form
    const formPages = formStuff.elements.bookPages.value;
    const formAuthor = formStuff.elements.bookAuthor.value;
    const formTitle = formStuff.elements.bookTitle.value;
   //console.log(formTitle, formAuthor, formPages);

    booker(formTitle, formAuthor, formPages);
    //then stores them in the constructor func + array
    function booker(a, b, c) {
        const newBook = new Book(a, b, c);
        console.log(newBook);
        theLib.push(newBook);
        console.log(theLib);
    }
    
    //console.log(testForm);

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

thoughts:
-whats the point of the constructor object if im just grabbing info from the input and storing it in the array?
  - is it to make the info into an object before storing it in the array??
*/