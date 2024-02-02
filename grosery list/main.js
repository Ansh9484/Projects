const btn = document.querySelector('.btn');
const clear = document.querySelector('.btnre');
const mainbox = document.querySelector('.display');
const taskInput = document.querySelector('input');
let arr = [];
// let a = 0;

btn.addEventListener('click', add);

function add() {
  const input = taskInput.value;
  if (input == '') {
    alert("Enter Data");
    return;
  } else {
    arr.push(input);
    input.value = '';
    console.log(input);
    dis();
    taskInput.value = '';
  }
}
clear.addEventListener('click', function(){
  if(arr.length <= 0){
    alert("list is empty");
    return
  }
  else{
    clearall();
    dis();
  }
})

function dis() {
  let a = 1;
  let clutter = '';
  for (let i = 0; i < arr.length; i++) {
    clutter += `<div class="cont">
                  <p>${a}.${arr[i]}</p>
                  <i class="fa-solid fa-xmark delete-icon" data-index="${i}"></i>
                </div>`;
                a++;
  }
  
  mainbox.innerHTML = clutter;
  addDeleteEventListeners();
}

function addDeleteEventListeners() {
  const deleteIcons = document.querySelectorAll('.delete-icon');
  deleteIcons.forEach(icon => {
    icon.addEventListener('click', function () {
      const index = parseInt(icon.dataset.index);
      arr.splice(index, 1);
      dis();
    });
  });
}

function clearall(){
  arr.splice(0, arr.length);
  console.log(arr);
}