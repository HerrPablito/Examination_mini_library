var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const booksElem = document.querySelectorAll('.book');
console.log(booksElem);
const pageOne = document.querySelector('#pageOne');
const pageTwo = document.querySelector('#pageTwo');
const API_URL = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books";
function getBooks() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(API_URL);
            const bookData = response;
            console.log(response);
            if (response.status === 200) {
                const booksData = yield response.json();
                console.log(booksData);
            }
        }
        catch (error) {
            console.log(error);
        }
    });
}
;
getBooks();
function showBooks() {
    booksElem.forEach(book => {
        book.addEventListener('click', () => {
            console.log('du klickade på en bok');
            pageTwo.classList.toggle('hide');
        });
    });
}
showBooks();
export {};
