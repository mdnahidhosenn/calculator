let input = document.querySelector('.input-box');
let buttons= document.querySelectorAll('button')
let string = '';

buttons.forEach(button=>{
  button.addEventListener('click',(e)=>{
    if(e.target.innerHTML == '='){
      string=eval(string);
      input.value = string;

    }else if(button.innerText == 'Ac'){
      string='';
      input.value = string;
    }else if (button.innerText == 'Del'){
      string=input.value.substring(0,input.value.length -1);
      input.value = string;
    }
    else {
      string+=button.innerText;
      input.value=string;
    }
    if(input.value == 'undefined'){
      string='';
      input.value=string;
    }
  })
})


