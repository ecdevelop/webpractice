// let p = document.querySelector(".screen");
let pvalue = document.querySelector(".screen").innerText;

function getp(){
    console.log(p);
}

function getNumberOne(){
    p.innerHTML =   pvalue = '' +pvalue+1;
}

function getNumberOne(){
    p.innerHTML =   pvalue = '' +pvalue+1;
}

function clear(){
    p.innerText = '0';
}

const buttonGroup = document.getElementById("button-group");
let p = document.querySelector(".screen");

const buttonGroupPressed = e => { 

  const isButton = e.target.nodeName === 'BUTTON';
  if(!isButton) {
    return
  }
  
     p.innerHTML = pvalue =''+pvalue+ e.target.innerHTML;
    // if(p.innerHTML === '0'){
    //     alert("zero");
    //     p.innerHTML =  e.target.innerHTML ;
    // }  

}
buttonGroup.addEventListener("click", buttonGroupPressed);



/* <div id="button-group">
  <button id="button-1">Button 1</button>
  <button id="button-2">Button 2</button>
  <button id="button-3">Button 3</button>
  <button id="button-4">Button 4</button>
  <button id="button-5">Button 5</button>
</div>
<div id="result"></div> */



// const buttonGroup = document.getElementById("button-group");
// const result = document.getElementById("result");

// const buttonGroupPressed = e => { 
  
//   const isButton = e.target.nodeName === 'BUTTON';
  
//   if(!isButton) {
//     return
//   }
  
//    result.innerHTML = `ID of <em>${e.target.innerHTML}</em> is <strong>${e.target.id}</strong>`;
  
// }
// buttonGroup.addEventListener("click", buttonGroupPressed);

