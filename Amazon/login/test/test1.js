
alert("press ok");

const counter = document.getElementById("counter");
const incr = document.getElementById("increment");
const decr = document.getElementById("decrement");
const reset = document.getElementById("reset");
 
 let a=0;
function recall(){
   counter.textContent = a;
}

function increment(){
    a++;
    recall();
}

function decrement(){

   a--;
   recall();
}

function reset(){

    a=0;
    recall();
}

recall();