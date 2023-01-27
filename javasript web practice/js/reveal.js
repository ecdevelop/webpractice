

//Dom manipulation 

//Event Listener 

// element.addEventListener("click", function);

const buttonTwo = document.querySelector('.btn-2');

function alertBtn(){
	alert('I also love javascript');
};

buttonTwo.addEventListener("click", alertBtn);


const newBackgroundColor = document.querySelector('.btn-3');
const box3 = document.querySelector('.box-3');

function changeBgColor(){
	box3.style.backgroundColor = 'blue';
}

newBackgroundColor.addEventListener("mouseover",changeBgColor);

