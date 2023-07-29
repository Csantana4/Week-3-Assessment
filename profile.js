









const handleSubmit=(event) =>{
    event.preventDefault()
    let newSkill = input.value
    let newItem = document.createElement('li')
    newItem.textContent= newSkill
    list.appendChild(newItem)
    
}



let colorBtn= document.querySelector('#color')

let placeBtn= document.querySelector('#place')

let ritualBtn= document.querySelector('#ritual')



let favColor = () => {
  if(colorBtn.textContent = true){
    alert('Red')
  }
}
let favPlace = () => {
    if(placeBtn.textContent = true){
        alert('My Bed')
    }
}
let favRitual = () => {
    if(ritualBtn.textContent = true){
        alert('Floss before brushing teeth')
    }
}








colorBtn.addEventListener('click', favColor)

placeBtn.addEventListener('click', favPlace)

ritualBtn.addEventListener('click', favRitual)