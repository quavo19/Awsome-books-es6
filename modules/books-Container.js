let booksContainer = () => {
let book = [];
class CreateBook{
    constructor(titleValue, authorValue, id){
    this.title = titleValue;
    this.author = authorValue;
    this.id = id;
    }
}

const pushBook = () => {
  const titleValue = document.getElementById('Title').value;
  const authorValue = document.getElementById('Author').value;
  const id = book.length;
  const theBook = new CreateBook(titleValue, authorValue, id);
  // eslint-disable-next-line eqeqeq
  if (titleValue != '' || authorValue != '') {
    book.push(theBook);
  }
};
const store = () => {
    localStorage.setItem('book', JSON.stringify(book));
  };
  const addBtn = document.querySelector('#Add-Button');
  addBtn.addEventListener('click', () => {
    pushBook();
    store();
    window.location.reload();
  });
  book = JSON.parse(localStorage.getItem('book')) || [];
}

export {booksContainer};