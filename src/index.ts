
//Mini Library
// Ladda ner info om böckerna genom API
// Böckenas framsida ska synas i fönstret
// Klicka på bok för att få mer informaion om denna. 
import { Books } from './modules/interfaces.js';
const booksElem = document.querySelectorAll('.book')
console.log(booksElem);

const pageOne = document.querySelector('#pageOne');
const pageTwo = document.querySelector('#pageTwo');
const API_URL = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books";

async function getBooks() {
    try {
        const response = await fetch(API_URL)
        const bookData = response
        console.log(response)
        if (response.status === 200) {
            const booksData: Books[] = await response.json();
            console.log(booksData);
        }
    } catch (error) {
        console.log(error);
    }
};

getBooks()
function showBooks() {
    booksElem.forEach(book => {
        book.addEventListener('click', () => {
            console.log('du klickade på en bok');
            pageTwo.classList.toggle('hide')            
        });
    })


}


showBooks()