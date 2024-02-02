const end = "28 January 2025 11:38 PM";
const h1 = document.querySelectorAll('.h1');
const vido = document.querySelector('.video');
const box = document.querySelectorAll('.box');
const dot = document.querySelectorAll('.dot');
const happy = document.querySelector('.head');
const newyear = document.querySelector('.text');
let vid = document.getElementById("myVideo"); 
let a=0;
calculate()
function calculate(){
const enddate = new Date(end)
const startdate = new Date()
clutter = '';
let diff = (enddate - startdate) /1000 ;
    if(enddate<startdate){
        if(a==0){
        clutter += `<video id="myVideo" autoplay unmuted loop src="c.mp4"></video>`
        vido.innerHTML = clutter;
        console.log("video uploded")
                box.forEach(boxes =>{
                    boxes.style.animation = 'example 1s';
                    boxes.style.opacity = '0';
                })
                dot.forEach(dots =>{
                    dots.style.animation = 'example 1s';
                    dots.style.opacity = '0';
                })
                happy.style.animation = 'example 1s';
                happy.style.opacity = '0';
                a=1;
        }
        else{
            return;
        }
    }else{
let day = diff / 3600 / 24 ;
h1[0].innerHTML = (Math.floor(day));

let hour = (diff / 3600) %24 ;
h1[1].innerHTML = (Math.floor(hour));

let minuet = (diff / 60) % 60 ;
h1[2].innerHTML = (Math.floor(minuet));

let second = (diff) % 60;
h1[3].innerHTML = (Math.floor(second));
    }
}
setInterval(() => {
    calculate();
}, 1000);

