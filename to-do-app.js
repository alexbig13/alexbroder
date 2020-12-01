let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let input = document.getElementById('taskinput');
let list = document.getElementById("myList");


btn1.addEventListener('click', function () {
  if (input.value == '') {
    alert('need to be at least 1 letter or number')
  } else {
    let li = document.createElement('li');
    let del = document.createElement('button');
    let doneBtn = document.createElement('button');
    doneBtn.innerHTML = 'Finished?';
    del.innerHTML = 'Delete';
    list.appendChild(li);
    li.innerHTML += input.value + " ";
    li.appendChild(del);
    li.appendChild(doneBtn);
    del.addEventListener('click', function () {
      del.parentElement.remove();
    })
    doneBtn.addEventListener('click', function () {
      doneBtn.innerHTML = "Task is Done!";
      doneBtn.setAttribute('disabled', 'disabled');
    })

  }
})
btn2.addEventListener('click', function () {
  list.innerHTML = '';
})

