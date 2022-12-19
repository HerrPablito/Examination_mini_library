
//Mini Library
// Ladda ner info om böckerna genom API
// Böckenas framsida ska synas i fönstret
// Klicka på bok för att få mer informaion om denna. 
import { Books } from './modules/interfaces.js';
const booksElem = document.querySelectorAll('.book')
const pageOne = document.querySelector<HTMLElement>('#pageOne');
const pageTwo = document.querySelector('#pageTwo');
let booksInfo = document.querySelector('#books_info')
const minimizeInfoElem = document.querySelector('#minimize')
const container__h1 = document.querySelector<HTMLElement>('#container__h1')
const API_URL = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books";




async function getBooks() {
    try {
        const response = await fetch(API_URL)

        if (response.status === 200) {
            const booksData: Books[] = await response.json();
            console.log(booksData);
            showBooks(booksData)

        }
    } catch (error) {
        console.log(error);
    }
};




function showBooks(booksData: Books[]) {
    //console.log(booksData);


    booksElem.forEach(book => {
        console.log(book.id);

        book.addEventListener('click', () => {

            if (book.id === "book01") {
                booksInfo.innerHTML = (`${booksData[0].title} <br> By ${booksData[0].author} <br> <br> ${booksData[0].plot} <br> Audience: ${booksData[0].audience}    First published: ${booksData[0].year} <br>  Pages: ${booksData[0].pages}  publisher: ${booksData[0].publisher}`)
            } else if (book.id === "book02") {
                booksInfo.innerHTML = (`${booksData[1].title} <br> By ${booksData[1].author} <br> <br> ${booksData[1].plot} <br> Audience: ${booksData[1].audience}    First published: ${booksData[1].year} <br>  Pages: ${booksData[1].pages}  publisher: ${booksData[1].publisher}`)
            } else if (book.id === "book03") {
                booksInfo.innerHTML = (`${booksData[2].title} <br> By ${booksData[2].author} <br> <br> ${booksData[2].plot} <br> Audience: ${booksData[2].audience}    First published: ${booksData[2].year} <br>  Pages: ${booksData[2].pages}  publisher: ${booksData[2].publisher}`)
            } else if (book.id === "book04") {
                booksInfo.innerHTML = (`${booksData[3].title} <br> By ${booksData[3].author} <br> <br> ${booksData[3].plot} <br> Audience: ${booksData[3].audience}    First published: ${booksData[3].year} <br>  Pages: ${booksData[3].pages}  publisher: ${booksData[3].publisher}`)
            } else if (book.id === "book05") {
                booksInfo.innerHTML = (`${booksData[4].title} <br> By ${booksData[4].author} <br> <br> ${booksData[4].plot} <br> Audience: ${booksData[4].audience}    First published: ${booksData[4].year} <br>  Pages: ${booksData[4].pages}  publisher: ${booksData[4].publisher}`)
            } else if (book.id === "book06") {
                booksInfo.innerHTML = (`${booksData[5].title} <br> By ${booksData[5].author} <br> <br> ${booksData[5].plot} <br> Audience: ${booksData[5].audience}    First published: ${booksData[5].year} <br>  Pages: ${booksData[5].pages}  publisher: ${booksData[5].publisher}`)
            } else if (book.id === "book07") {
                booksInfo.innerHTML = (`${booksData[6].title} <br> By ${booksData[6].author} <br> <br> ${booksData[6].plot} <br> Audience: ${booksData[6].audience}    First published: ${booksData[6].year} <br>  Pages: ${booksData[6].pages}  publisher: ${booksData[6].publisher}`)
            } else if (book.id === "book08") {
                booksInfo.innerHTML = (`${booksData[7].title} <br> By ${booksData[7].author} <br> <br> ${booksData[7].plot} <br> Audience: ${booksData[7].audience}    First published: ${booksData[7].year} <br>  Pages: ${booksData[7].pages} <span>          publisher: ${booksData[7].publisher}`)
            }
            pageTwo.classList.toggle('hide')
            pageOne.style.display = 'none';
            container__h1.style.display = 'none';

            //booksInfo.innerHTML = (`booksData: ${booksData[4].year}}`)

        });

    })
    minimizeInfoElem.addEventListener('click', () => {
        pageOne.style.display = 'grid';
        container__h1.style.display = 'grid';
        pageTwo.classList.toggle('hide')
    })



}

getBooks()



