var button=document.querySelector("#restart");
var square=document.querySelectorAll('td');
button.addEventListener("click",function(){
for(var i=0;i<square.length;i++){
  square[i].textContent="";
}
})
function Change(){
  if(this.textContent===''){
    this.textContent='X';
  }
  else  if(this.textContent==='X'){
      this.textContent='O';
    }
    else {
      this.textContent='';
    }
}
for(var i=0;i<square.length;i++)
{
  square[i].addEventListener('click',Change);
}
