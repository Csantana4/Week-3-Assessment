









const handleSubmit=(event) =>{
    event.preventDefault()
    let newSkill = input.value
    let newItem = document.createElement('li')
    newItem.textContent= newSkill
    list.appendChild(newItem)
    
}



let colorBtn= document.getElementById
('color')
let placeBtn= document.getElementById
('place')
let ritualBtn= document.getElementById
('ritual')

function favColor(evt) {
	evt.preventDefault();
	
	alert("Red")
}

let favColor = () => {
  let current = current+'red'
}
let favPlace = () => {
    let current= current+'My bed'
}
let favRitual = () => {
    let current = current+'Floss before brushing'
}








colorBtn.addEventListener('click', favColor)

placeBtn.addEventListener('click', favPlace)

ritualBtn.addEventListener('click', favRitual)