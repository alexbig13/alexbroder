let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let input = document.getElementById('taskinput');
let list = document.getElementById("myList");


btn1.addEventListener('click', () => {
  if (input.value == '') {
    alert('need to be at least 1 letter or number')
  } else {
    if (confirm('are you sure you want to add this task?') == true) {


      let li = document.createElement('li');
      li.style.margin = '5px';
      let del = document.createElement('button');
      let doneBtn = document.createElement('button');
      doneBtn.innerHTML = 'Finished?';
      doneBtn.setAttribute('class', 'btn btn-outline-success');
      doneBtn.style.position = 'relative';
      doneBtn.style.left = `25px`;
      del.setAttribute('class', 'btn btn-outline-danger');
      del.style.position = 'relative';
      del.style.left = `20px`;
      del.innerHTML = 'Delete';
      list.appendChild(li);
      li.innerHTML += input.value;
      li.appendChild(del);
      li.appendChild(doneBtn);
      del.addEventListener('click', () => {
        del.parentElement.remove();
      })
      doneBtn.addEventListener('click', () => {
        doneBtn.innerHTML = "Task is Done!";
        doneBtn.setAttribute('disabled', 'disabled');
      })

    }
  }
})
btn2.addEventListener('click', () => {
  list.innerHTML = '';
})

