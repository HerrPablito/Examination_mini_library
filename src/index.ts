
//Mini Library
// Ladda ner info om böckerna genom API
// Böckenas framsida ska synas i fönstret
// Klicka på bok för att få mer informaion om denna. 
import { Books } from './modules/interfaces.js';
const booksElem = document.querySelectorAll('.book')
const pageOne = document.querySelector('#pageOne');
const pageTwo = document.querySelector('#pageTwo');
let booksInfo = document.querySelector('#books_info')
const API_URL = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books";

async function getBooks() {
    try {
        const response = await fetch(API_URL)

        if (response.status === 200) {
            const booksData: Books[] = await response.json();
            console.log(booksData);

            for (let i = 0; i < booksData.length; i++) {
            //console.log(booksData[i].year);      
            const bookYear = booksData[i].year  
            console.log(bookYear);
                
            }
        }
    } catch (error) {
        console.log(error);
    }
};




function showBooks() {     
    booksElem.forEach(book => {
        book.addEventListener('click', () => {
            console.log('du klickade på en bok');
            pageTwo.classList.toggle('hide') 
           
            booksInfo.innerHTML=('test')
        
        });
    })
}

getBooks()
showBooks()


