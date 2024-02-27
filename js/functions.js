const url = 'https://random-data-api.com/api/v2/beers'

const brand_span = document.querySelector('span#brand')
const name_span = document.querySelector('span#name')
const style_span = document.querySelector('span#style')
const alcohol_span = document.querySelector('span#alcohol')
const button = document.querySelector('button')

const getData = () => {
    fetch(url)
    .then(response => response.json())
    .then(json => {
        brand_span.innerHTML = json.brand
        name_span.innerHTML = json.name
        style_span.innerHTML = json.style
        alcohol_span.innerHTML = json.alcohol
    }).catch(error => {
        alert(error)
    })
}

button.addEventListener('click', () => {
    getData()
})

getData()