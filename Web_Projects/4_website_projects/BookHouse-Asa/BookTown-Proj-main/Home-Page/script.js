import books from "../DataBase/Data.js";

// new books section

function cartCreator(book) {
    return `<div class="col-lg-3 col-sm-6">
    <div class="thumb-wrapper">
      <div class="img-box">
        <img src="${book.cover}" class="img-fluid" alt="book img">
      </div>
      <div class="thumb-content">
        <h4 class="book-name">${book.name}</h4>
            ${book.stars}
        <p class="item-price"><strike>${book.lastPrice || ""}</strike><b>${book.price}</b></p>
        <button class="btn btn-outline-danger"> Add to Cart <i class="bi bi-bag"></i></button>
      </div>
    </div>`
}


// best books section

const bestBooksCarouselItem1 = document.getElementById("bestBooksCarouselItem1");
const bestBooksCarouselItem2 = document.getElementById("bestBooksCarouselItem2");
const bestBooksCarouselItem3 = document.getElementById("bestBooksCarouselItem3");

const sortedBooksPerRate = books().sort(function (a, b) {
    let rateA = a.rating,
      rateB = b.rating;
    return rateB - rateA;
  });

const slicedSortedBooksPerRate1 = sortedBooksPerRate.slice(0, 4);
const slicedSortedBooksPerRate2 = sortedBooksPerRate.slice(4, 8);
const slicedSortedBooksPerRate3 = sortedBooksPerRate.slice(8, 12);

slicedSortedBooksPerRate1.forEach(book => {
    bestBooksCarouselItem1.innerHTML += (cartCreator(book));
})

slicedSortedBooksPerRate2.forEach(book => {
    bestBooksCarouselItem2.innerHTML += (cartCreator(book));
})

slicedSortedBooksPerRate3.forEach(book => {
    bestBooksCarouselItem3.innerHTML += (cartCreator(book));
})




// best of novels section

const sortednovelsPerRate = novels.sort(function (a, b) {
    let rateA = a.rating,
      rateB = b.rating;
    return rateB - rateA;
  });



