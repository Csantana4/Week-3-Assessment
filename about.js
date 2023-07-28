console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form has been submitted successfully");
}

function compliment(event){
	event.preventDefault();
	alert('Good job!!!')
}


let form = document.querySelector('#contact');





form.addEventListener('submit', handleSubmit);
form.addEventListener('mouseover',compliment)
