
let numberOfButton = document.querySelectorAll("button").length;
let num = "";
for(let i=0; i<numberOfButton;i++){
  
  document.querySelectorAll("button")[i].addEventListener("click", updatedDisplay);
  
  function updatedDisplay(){
    if(this.innerHTML === "C"){
      num = "";
      document.querySelector("input").value= num;
    }
    else if(this.innerHTML === "="){
      num = eval(num);
      document.querySelector("input").value= num;
    }
    else{num = num + this.innerHTML;
      document.querySelector("input").value= num;}
    
  }
}
