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
let pic = document.querySelector('img')





form.addEventListener('submit', handleSubmit);
pic.addEventListener('mouseover',compliment)
