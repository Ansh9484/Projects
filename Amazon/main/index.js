const hero = document.querySelector(".hero")
const image = document.querySelector(".hero-img")
const left = document.querySelector(".leftar")
const right = document.querySelector(".rightar")
let arr = ["h2.jpg","heromain.jpg"];

left.addEventListener('click', function(){
    image.style.backgroundImage = "url("+arr[0]+")";
})
// right.addEventListener('click', function(){
//     console.log("right");
// })