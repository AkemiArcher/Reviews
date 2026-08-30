"use strict";
console.log("Hello World");
const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "assets/person-1.jpeg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img: "assets/person-2.jpeg",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img: "assets/person-4.jpeg",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img: "assets/person-3.jpeg",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];
const img = document.querySelector("#author-img");
const author = document.querySelector("#author-name");
const job = document.querySelector("#author-job");
const info = document.querySelector("#review__text");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const randomBtn = document.querySelector(".review__rnd-button");
let currentItem = 0;
function showPerson(person) {
    const item = reviews[person];
    if (!item || !img || !author || !job || !info)
        return;
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}
window.addEventListener("DOMContentLoaded", () => {
    showPerson(currentItem);
});
nextBtn?.addEventListener("click", () => {
    if (currentItem >= reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem++);
});
prevBtn?.addEventListener("click", () => {
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem--);
});
randomBtn?.addEventListener("click", () => {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});
