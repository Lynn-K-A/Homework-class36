//cspell: disable
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-1-the-book-list

I'd like to display my three favorite books inside a nice webpage!

1. Iterate through the array of books.
2. For each book, create a `<p>`
element with the book title and author.
3. Use a `<ul>`  and `<li>` to display the books.
4. Add an `<img>` to each book that links to a URL of the book cover.
5. Change the style of the book depending on whether you have read it(green) or not(red).

The end result should look something like this:
https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

-----------------------------------------------------------------------------*/
//cspell: enable

function createBookList(books) {
  // TODO your code goes in here, return the ul element
const ul = document.getElementById("bookList");
books.forEach(({title, author, alreadyRead, src}) => {
  const liEl = document.createElement("li");
  ul.appendChild(liEl);
  liEl.classList.add("list-elements");
  const pEl = document.createElement("p");
  liEl.appendChild(pEl);
  pEl.textContent = title + " by: " + author;
  const imgEl = document.createElement("img");
  liEl.appendChild(imgEl);
  imgEl.src = src;
  if (alreadyRead === true) {
    const lists = document.getElementsByClassName("list-elements");
    for (let i = 0; i < lists.length; i++){
      lists[i].classList.add('read');
   }
  } else {
    const lists = document.getElementsByClassName("list-elements");
    for (let i = 0; i < lists.length; i++){
      lists[i].classList.add('unread');
   } 
  }
});
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
      src: 'file:///C:/Users/lynn/Desktop/tbd/HYF-Homework/Homework-class36/2-Browsers/Week1/homework/ex1-bookList/assets/the_design_of_everyday_things.jpg'
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
      src: 'file:///C:/Users/lynn/Desktop/tbd/HYF-Homework/Homework-class36/2-Browsers/Week1/homework/ex1-bookList/assets/the_most_human_human.jpg'
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
      src: 'file:///C:/Users/lynn/Desktop/tbd/HYF-Homework/Homework-class36/2-Browsers/Week1/homework/ex1-bookList/assets/the_pragmatic_programmer.jpg'
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
