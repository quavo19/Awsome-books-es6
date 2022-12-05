let store = () => {
    let book = [];
    const createBook = () => {
        const bookList = document.querySelector('.books-list');
          bookList.innerHTML = ' ';
          book = JSON.parse(localStorage.getItem('book')) || [];
        
          for (let i = 0; i < book.length; i += 1) {
            const individualBook = document.createElement('div');
            if (book[i].id % 2 === 0) {
              individualBook.id = 'even';
            } else {
              individualBook.id = 'odd';
            }
            bookList.append(individualBook);
            const bookDetails = document.createElement('p');
            bookDetails.innerText = `"${book[i].title}" By ${book[i].author}`;
            individualBook.append(bookDetails);
            const removeBtn = document.createElement('button');
            removeBtn.innerText = 'Remove';
            if (book[i].id % 2 === 0) {
              removeBtn.classList.add('even');
            } else {
              removeBtn.classList.add('odd');
            }
            individualBook.append(removeBtn);
            removeBtn.id = book[i].id;
            const removeBook = () => {
              const target = removeBtn.id;
              book.splice(target, 1);
        
              let theId = 0;
              if (book.length > 0) {
                book.forEach((m) => {
                  m.id = theId;
                  theId += 1;
                });
              }
            };
        
            removeBtn.addEventListener('click', () => {
              book = JSON.parse(localStorage.getItem('book')) || [];
              removeBook();
              // eslint-disable-next-line no-use-before-define
              store();
              window.location.reload();
            });
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
        createBook();
} 
export {store}