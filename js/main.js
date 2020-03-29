'use strict'
const n=5;
const find=Math.floor(Math.random()*n);
for(let i=0;i<n;i++){
  const box=document.createElement('div');
  box.classList.add('box');
  box.textContent='?';
  box.addEventListener('click',()=>{
    if(i===find){
      box.textContent='Fine!';
      box.classList.add('fine');
    }else{
      box.textContent='bad...';
      box.classList.add('bad');
    }
  })
  document.getElementById('game').appendChild(box);
}