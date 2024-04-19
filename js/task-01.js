//const message = 'Hello world' // Try edit me
// Update header text
//document.querySelector('#header').innerHTML = message
//console.log(categoriesQuery[0].firstElementChild.innerHTML)
//console.log(categoriesQuery[0].firstElementChild.nextElementSibling.childElementCount)
//console.log(categoriesQuery)


// number of categories
//let categoriesItem = document.getElementsByClassName("item")
let categoriesQuery = document.querySelectorAll(".item")

// Log to console
//console.log(`Number of categories: ${categoriesItem.length}`)
console.log(`Number of categories: ${categoriesQuery.length}`)

for (let i = 0; i < categoriesQuery.length; i++) {    
    console.log(`Categories : ${categoriesQuery[i].firstElementChild.innerHTML}`)
    console.log(`Elements: ${categoriesQuery[i].firstElementChild.nextElementSibling.childElementCount}`)            
    };




