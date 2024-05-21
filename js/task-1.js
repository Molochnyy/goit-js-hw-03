'use strict';


function slugify(title) {
    const a = title.toLowerCase();
    const b = a.split(' ');
    const c = b.join("-");
    return c;
}

console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));