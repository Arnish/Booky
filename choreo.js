const theLib = [];


//constructor function
function Book(title,author,pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

//closemodal btn
const closeBtnModal = document.getElementById("closeModal");
closeBtnModal.addEventListener("click", function () {
    document.getElementById("modalBG").style.display = "none"; 
    document.getElementById("modalContent").style.display = "none";
});

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

    const cardBody = document.getElementById("cardsDiv");
    for (i=0; i<theLib.length; i++) {
        //theLib[i] // reads through each book for how many ever books there are

        const bookCardDiv = document.createElement("div");
        bookCardDiv.classList.add("bookCard");
        //makes title and appends it to the h1 element > then appends to the card div itself
        const headerTitle = document.createElement("h1");
        const textTitle = document.createTextNode(theLib[i].title);
        headerTitle.appendChild(textTitle);
        bookCardDiv.appendChild(headerTitle);
        //makes author and appends it to the p element > then appends to the card div
        const paraAuthor = document.createElement("p")
        const textAuthor = document.createTextNode(theLib[i].author);
        paraAuthor.appendChild(textAuthor);
        bookCardDiv.appendChild(paraAuthor);


        const paraPages = document.createElement("p")
        const textPages = document.createTextNode(theLib[i].pages);
        paraPages.appendChild(textPages);
        bookCardDiv.appendChild(paraPages);

        //make a remove button and a read button
        const removeBtn = document.createElement("button");
        const textBtn = document.createTextNode("Remove");
        removeBtn.appendChild(textBtn);
        bookCardDiv.appendChild(removeBtn);

        //appends the card div to the main body div
        cardBody.appendChild(bookCardDiv);

        //popping the main array so it doesnt duplicate books everytime
        let poppedArr = theLib.pop();
        console.log(poppedArr);
        //console.log(textTitle);
        //console.log(theLib[i].title);
    }
    //console.log(testForm);

    //closes the modal once done
    document.getElementById("modalBG").style.display = "none"; 
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
-get form imput and feed into the constructor function: DONE
-make close button for the modal and set display value back to none
-make cards for each book in the array: DONE
  - create element node first (p, h1, h2, etc)
  - to add text to those elements you have to create a textNode
  - next append the textNode to the element, and finally the element node to whatever it's parent is in the doc
  *make div, add class "bookCard" to it
   *make h1 > then create textNode for title and append it to h1 > append h1 to the div
   *make p > create textNode for author and append it to p > append p to the div
   *make another p > create textNode for amnt of pages, append to p > append p to the div
   * append the bookCard div to the cardsDiv(body)
   
    ****need a way to make sure the same book doesnt get added multiple times when going through the book array
- add remove button and read button for books
thoughts:
-whats the point of the constructor object if im just grabbing info from the input and storing it in the array?
  - is it to make the info into an object before storing it in the array??
*/