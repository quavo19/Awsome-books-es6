/* eslint-disable no-loop-func */
import { date } from './modules/date-time.js';
import { Navigation } from './modules/navigation.js';
import { booksContainer } from './modules/books-Container.js';
import { store } from './modules/localStorage.js';
date();
booksContainer();
 let book = [];


store();
Navigation();
