
const booksElem = document.querySelectorAll('.book')
const pageOne = document.querySelector<HTMLElement>('#pageOne');
const pageTwo = document.querySelector('#pageTwo');
let bookHeaderElem = document.querySelector<HTMLElement>('#book_header_title');
let bookAuthorElem = document.querySelector<HTMLElement>('#book_author');
let bookPlotElem = document.querySelector<HTMLElement>('#book_plot');
let bookAudienceElem = document.querySelector<HTMLElement>('#audience');
let bookPublishedElem = document.querySelector<HTMLElement>('#published');
let bookPagesElem = document.querySelector<HTMLElement>('#pages');
let bookPublisherElem = document.querySelector<HTMLElement>('#Publisher');
const minimizeInfoElem = document.querySelector('#minimize')
const container__h1 = document.querySelector<HTMLElement>('#container__h1')
const API_URL = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books";
const searchButtonElem = document.querySelector('#search_Btn')
let searchBooksInputElem = document.querySelector<HTMLInputElement>('#search_book_input')
const errorElem = document.querySelector('#error')
const form = document.querySelector('#form')
export{ booksElem, pageOne, pageTwo, bookHeaderElem, bookAuthorElem, bookPlotElem, bookAudienceElem, bookPublishedElem, bookPagesElem, bookPublisherElem, minimizeInfoElem, container__h1, API_URL, searchButtonElem,searchBooksInputElem, errorElem, form }