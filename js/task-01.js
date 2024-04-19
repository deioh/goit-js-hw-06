//const message = 'Hello world' // Try edit me
// Update header text
//document.querySelector('#header').innerHTML = message
//console.log(categoriesQuery[0].firstElementChild.innerHTML)
//console.log(categoriesQuery[0].firstElementChild.nextElementSibling.childElementCount)
//console.log(categoriesQuery)
//let categoriesItem = document.getElementsByClassName("item")
//console.log(`Number of categories: ${categoriesItem.length}`)

// number of categories

let categoriesQuery = document.querySelectorAll(".item")

// Log to console

console.log(`Number of categories: ${categoriesQuery.length}`)

for (let i = 0; i < categoriesQuery.length; i++) {    
    console.log(`Categories : ${categoriesQuery[i].firstElementChild.innerHTML}`)
    console.log(`Elements: ${categoriesQuery[i].firstElementChild.nextElementSibling.childElementCount}`)            
    };




