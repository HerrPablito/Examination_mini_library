
//Mini Library
// Ladda ner info om böckerna genom API
// Böckenas framsida ska synas i fönstret
// Klicka på bok för att få mer informaion om denna. 




const API_URL = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books";

import {Books} from './modules/interfaces.js';




async function getBooks() {
    try{
        const response = await fetch(API_URL)
        const bookData = response
        console.log(response) 
        if (response.status === 200) {
            const booksData: Books[] = await response.json();
            console.log(booksData);
        }
       
    }catch(error){
        console.log(error);
        
    }

        
        
};
    


getBooks()
