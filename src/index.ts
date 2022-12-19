
//MINI LIBRARY

import { Books } from './modules/interfaces.js';
import { booksElem, pageOne, pageTwo, bookHeaderElem, bookAuthorElem, bookPlotElem, bookAudienceElem, bookPublishedElem, bookPagesElem, bookPublisherElem, minimizeInfoElem, container__h1, API_URL, searchButtonElem, searchBooksInputElem, form, errorElem } from './modules/vairables.js';


async function getBooks() {
    try {
        const response = await fetch(API_URL)

        if (response.status === 200) {
            const booksData: Books[] = await response.json();
            showBooks(booksData)

        }
    } catch (error) {
        console.log(error);
    }
};

function showBooks(booksData: Books[]) {
    booksElem.forEach(book => {
        book.addEventListener('click', () => {

            if (book.id === "book01") {
                bookHeaderElem.innerHTML = (`${booksData[0].title}`)
                bookAuthorElem.innerHTML = (`By ${booksData[0].author}`)
                bookPlotElem.innerHTML = (`${booksData[0].plot}`)
                bookAudienceElem.innerHTML = (`Audience: ${booksData[0].audience}`)
                bookPublishedElem.innerHTML = (`First published: ${booksData[0].year}`)
                bookPagesElem.innerHTML = (`Pages: ${booksData[0].pages} `)
                bookPublisherElem.innerHTML = (`publisher: ${booksData[0].publisher}`)

            } else if (book.id === "book02") {
                bookHeaderElem.innerHTML = (`${booksData[1].title}`)
                bookAuthorElem.innerHTML = (`By ${booksData[1].author}`)
                bookPlotElem.innerHTML = (`${booksData[1].plot}`)
                bookAudienceElem.innerHTML = (`Audience: ${booksData[1].audience}`)
                bookPublishedElem.innerHTML = (`First published: ${booksData[1].year}`)
                bookPagesElem.innerHTML = (`Pages: ${booksData[1].pages} `)
                bookPublisherElem.innerHTML = (`Publisher: ${booksData[1].publisher}`)
            } else if (book.id === "book03") {
                bookHeaderElem.innerHTML = (`${booksData[2].title}`)
                bookAuthorElem.innerHTML = (`By ${booksData[2].author}`)
                bookPlotElem.innerHTML = (`${booksData[2].plot}`)
                bookAudienceElem.innerHTML = (`Audience: ${booksData[2].audience}`)
                bookPublishedElem.innerHTML = (`First published: ${booksData[2].year}`)
                bookPagesElem.innerHTML = (`Pages: ${booksData[2].pages} `)
                bookPublisherElem.innerHTML = (`Publisher: ${booksData[2].publisher}`)
            } else if (book.id === "book04") {
                bookHeaderElem.innerHTML = (`${booksData[3].title}`)
                bookAuthorElem.innerHTML = (`By ${booksData[3].author}`)
                bookPlotElem.innerHTML = (`${booksData[3].plot}`)
                bookAudienceElem.innerHTML = (`Audience: ${booksData[3].audience}`)
                bookPublishedElem.innerHTML = (`First published: ${booksData[3].year}`)
                bookPagesElem.innerHTML = (`Pages: ${booksData[3].pages} `)
                bookPublisherElem.innerHTML = (`Publisher: ${booksData[3].publisher}`)
            } else if (book.id === "book05") {
                bookHeaderElem.innerHTML = (`${booksData[4].title}`)
                bookAuthorElem.innerHTML = (`By ${booksData[4].author}`)
                bookPlotElem.innerHTML = (`${booksData[4].plot}`)
                bookAudienceElem.innerHTML = (`Audience: ${booksData[4].audience}`)
                bookPublishedElem.innerHTML = (`First published: ${booksData[4].year}`)
                bookPagesElem.innerHTML = (`Pages: ${booksData[4].pages} `)
                bookPublisherElem.innerHTML = (`Publisher: ${booksData[4].publisher}`)
            } else if (book.id === "book06") {
                bookHeaderElem.innerHTML = (`${booksData[5].title}`)
                bookAuthorElem.innerHTML = (`By ${booksData[5].author}`)
                bookPlotElem.innerHTML = (`${booksData[5].plot}`)
                bookAudienceElem.innerHTML = (`Audience: ${booksData[5].audience}`)
                bookPublishedElem.innerHTML = (`First published: ${booksData[5].year}`)
                bookPagesElem.innerHTML = (`Pages: ${booksData[5].pages} `)
                bookPublisherElem.innerHTML = (`Publisher: ${booksData[5].publisher}`)
            } else if (book.id === "book07") {
                bookHeaderElem.innerHTML = (`${booksData[6].title}`)
                bookAuthorElem.innerHTML = (`By ${booksData[6].author}`)
                bookPlotElem.innerHTML = (`${booksData[6].plot}`)
                bookAudienceElem.innerHTML = (`Audience: ${booksData[6].audience}`)
                bookPublishedElem.innerHTML = (`First published: ${booksData[6].year}`)
                bookPagesElem.innerHTML = (`Pages: ${booksData[6].pages} `)
                bookPublisherElem.innerHTML = (`Publisher: ${booksData[6].publisher}`)
            } else if (book.id === "book08") {
                bookHeaderElem.innerHTML = (`${booksData[7].title}`)
                bookAuthorElem.innerHTML = (`By ${booksData[7].author}`)
                bookPlotElem.innerHTML = (`${booksData[7].plot}`)
                bookAudienceElem.innerHTML = (`Audience: ${booksData[7].audience}`)
                bookPublishedElem.innerHTML = (`First published: ${booksData[7].year}`)
                bookPagesElem.innerHTML = (`Pages: ${booksData[7].pages} `)
                bookPublisherElem.innerHTML = (`Publisher: ${booksData[7].publisher}`)
            }
            pageTwo.classList.toggle('hide')
            pageOne.style.display = 'none';
            container__h1.style.display = 'none';
        });

    })
    minimizeInfoElem.addEventListener('click', () => {
        pageOne.style.display = 'grid';
        container__h1.style.display = 'grid';
        pageTwo.classList.toggle('hide')

    })
}






getBooks()

searchButtonElem.addEventListener('click', function () {
    const search = searchBooksInputElem.value;
    console.log(search);
    if (search === "Goodnight Moon" || search === "goodnight moon" || search === "Goodnight moon" || search === "good night moon") {
        document.getElementById('book01').style.animation = "blinkingBackground 2s infinite";

    } else if (search === "The Very Hungry Caterpillar") {
        document.getElementById('book02').style.animation = "blinkingBackground 2s infinite";

    } else if (search === "A Wrinkle in Time") {
        document.getElementById('book03').style.animation = "blinkingBackground 2s infinite";

    } else if (search === "Harold and the Purple Crayon") {
        document.getElementById('book04').style.animation = "blinkingBackground 2s infinite";

    } else if (search === "Where the Wild Things Are") {
        document.getElementById('book05').style.animation = "blinkingBackground 2s infinite";

    } else if (search === "Madeline") {
        document.getElementById('book06').style.animation = "blinkingBackground 2s infinite";

    } else if (search === "The Tale of Peter Rabbit") {
        document.getElementById('book07').style.animation = "blinkingBackground 2s infinite";

    } else if (search === "Charlotte’s Web") {
        document.getElementById('book08').style.animation = "blinkingBackground 2s infinite";

    } else {
        console.log('boken finns inte');

    }
}
)
