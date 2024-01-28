
let form = document.querySelector('form')
let city = document.querySelector('#city-type')


let cities = ['ATX', 'NYC', 'SF', 'LA', 'SYD']

for(i=0; i < 5; i++) {
    let option = document.createElement('option')
    option.textContent = cities[i]
    
    city.appendChild(option)
}

city.addEventListener('change', function(event) {
    let chosenCity = event.target.value

    if(chosenCity === 'ATX') {
        document.querySelector('body').style.backgroundImage='url(images/austin.jpg)'
    } else if(chosenCity === 'NYC') {
        document.querySelector('body').style.backgroundImage='url(images/nyc.jpg)'
    } else if(chosenCity === 'SF') {
        document.querySelector('body').style.backgroundImage='url(images/sf.jpg)'
    } else if(chosenCity === 'LA') {
        document.querySelector('body').style.backgroundImage='url(images/la.jpg)'
    } else if(chosenCity === 'SYD') {
        document.querySelector('body').style.backgroundImage='url(images/sydney.jpg)'
    }
})
