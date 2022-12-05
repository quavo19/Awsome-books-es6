
const Navigation = () => {
    const homePage = () => {
    const addNewBook = document.querySelector('.new-book');
    if (addNewBook.classList.contains('vanish') === false) {
      addNewBook.classList.add('vanish');
    }
    const contact = document.querySelector('.contact');
    if (contact.classList.contains('vanish') === false) {
      contact.classList.add('vanish');
    }
    const bookDisplay = document.querySelector('.awesome-books');
    if (bookDisplay.classList.contains('vanish') === true) {
      bookDisplay.classList.remove('vanish');
    }
  };
  
  homePage();
  
  const contactArea = () => {
    const addNewBook = document.querySelector('.new-book');
    if (addNewBook.classList.contains('vanish') === false) {
      addNewBook.classList.add('vanish');
    }
    const contact = document.querySelector('.contact');
    if (contact.classList.contains('vanish') === true) {
      contact.classList.remove('vanish');
    }
    const bookDisplay = document.querySelector('.awesome-books');
    if (bookDisplay.classList.contains('vanish') === false) {
      bookDisplay.classList.add('vanish');
    }
  };
  
  const addBookkkkk = () => {
    const addNewBook = document.querySelector('.new-book');
    if (addNewBook.classList.contains('vanish') === true) {
      addNewBook.classList.remove('vanish');
    }
    const contact = document.querySelector('.contact');
    if (contact.classList.contains('vanish') === false) {
      contact.classList.add('vanish');
    }
    const bookDisplay = document.querySelector('.awesome-books');
    if (bookDisplay.classList.contains('vanish') === false) {
      bookDisplay.classList.add('vanish');
    }
  };
  
  const toHome = document.querySelector('.home');
  toHome.addEventListener('click', () => {
    homePage();
  });
  
  const Home = document.querySelector('.Home');
  Home.addEventListener('click', () => {
    homePage();
  });
  
  const toAddNew = document.querySelector('.add-new');
  toAddNew.addEventListener('click', () => {
    addBookkkkk();
  });
  
  const toContact = document.querySelector('.contact-link');
  toContact.addEventListener('click', () => {
    contactArea();
  });
  
  const tolist = document.querySelector('.list');
  tolist.addEventListener('click', () => {
    homePage();
  });
  };

export{Navigation}
  