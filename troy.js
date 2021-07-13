const url = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=bowl&diet=vegetarian&number=10&offset=0&type=main%20course"

document.addEventListener('DOMContentLoaded', fetchData()) 
////////////////////////////////////////////////////////////////////
function fetchData(){ // this function fetches all of my data!
fetch(url, {
	"method": "GET",
	"headers":{"x-rapidapi-key":"7e599e728bmsh48fbeaf07cb689bp14a796jsn83e6008ec67c",
	"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"}
})
.then(res=> res.json())
.then(data => {loopData(data);})
.catch(err => {console.error(err);});}

function loopData(recipe){ // this function loops my data!
    let loopMe = Object.values(recipe)[0]
    // console.log(data)
//    console.log(Object.values(recipe)[0])
    loopMe.forEach((data) => {testCard(data)})
    // ID's available (keys): id, title, readyInMinutes, servings, sourceUrl,image, etc! 
    }
   ////////////////////////////////////////////////////////////////////
    function testCard(recipe){ // This function creates my elements
        //console.log(document.querySelector('#search-results'))
        //create elements
        console.log(recipe)
        let container = document.querySelector('#search-results')
        let title = document.createElement('h2')
        let h3Minutes = document.createElement('h3')
        let h4Serving = document.createElement('h4')
        let img = document.createElement('img')
        let btnDiv = document.createElement('div')
        let btnText = document.createElement('h3')
        let btn15 = document.createElement('button')
        let btn30 = document.createElement('button')
        let btn45 = document.createElement('button')
        let btn1hr = document.createElement('button')
    
        //add content to elements
        title.textContent = recipe.title
        img.src = `${recipe.image}${recipe.sourceUrl}`
        // console.log()
        h3Minutes.textContent = `Ready in: ${recipe.readyInMinutes} minutes!`
        h4Serving.textContent = `Servings: ${recipe.servings}`
        btn15.textContent = '15 minutes'
        btn30.textContent = '30 minutes'
        btn45.textContent = '45 minutes'
        btn1hr.textContent = '1 hour or more'
        btnText.textContent = 'How much time do you want to spend cooking today?'
        btn15.id = 'button15'
        btn30.id = 'button30'
        btn45.id = 'button45'
        btn1hr.id = 'button1hour'

        //append elements
        container.append(btnDiv, title, img, h3Minutes, h4Serving)
        btnDiv.append(btnText,btn15,btn30,btn45,btn1hr)
        // buttonFilter(recipe)
        
        // console.log(recipe)
        // attempt to add event listeners to buttons
        let b15 = document.querySelector('#button15')
        b15.addEventListener('click', ()=>{
            if(recipe.readyInMinutes <= 15){
                console.log(recipe.title)
            }
        })
        let b30 = document.querySelector('#button30')
        b30.addEventListener('click', ()=>{
            if(recipe.readyInMinutes <= 30){
                console.log(recipe.title)
            }
        })
        let b45 = document.querySelector('#button45')
        b45.addEventListener('click', ()=>{
            if(recipe.readyInMinutes <= 45){
                console.log(recipe.title)
            }
        })
        let b1Hour = document.querySelector('#button1hour')
        b1Hour.addEventListener('click', ()=>{
            if(recipe.readyInMinutes >= 60){
                console.log(recipe.title)
            }
        })
        
    }
////////////////////////////////////////////////////////////////////
// function buttonFilter(recipe){
//    // console.log(recipe)
// //button creation 
//     let container = document.querySelector('#search-results')

//         let btnDiv = document.createElement('div')
//         let btnText = document.createElement('h3')
//         let btn15 = document.createElement('button')
//         let btn30 = document.createElement('button')
//         let btn45 = document.createElement('button')
//         let btn1hr = document.createElement('button')
        
//         btn15.textContent = '15 minutes'
//         btn30.textContent = '30 minutes'
//         btn45.textContent = '45 minutes'
//         btn1hr.textContent = '1 hour or more'
//         btnText.textContent = 'How much time do you want to spend cooking today?'
//         btn15.id = 'button15'
//         btn30.id = 'button30'
//         btn45.id = 'button45'
//         btn1hr.id = 'button1hour'

//         container.append(btnDiv)
//         btnDiv.append(btnText,btn15,btn30,btn45,btn1hr)



//    // button functionality
//    let b15 = document.querySelector('#button15')
//         b15.addEventListener('click', ()=>{
//             if(recipe.readyInMinutes <= 15){
//                 console.log(recipe.title)
//             }
//         })
//         let b30 = document.querySelector('#button30')
//         b30.addEventListener('click', ()=>{
//             if(recipe.readyInMinutes <= 30){
//                 console.log(recipe.title)
//             }
//         })
//         let b45 = document.querySelector('#button45')
//         b45.addEventListener('click', ()=>{
//             if(recipe.readyInMinutes <= 45){
//                 console.log(recipe.title)
//             }
//         })
//         let b1Hour = document.querySelector('#button1hour')
//         b1Hour.addEventListener('click', ()=>{
//             if(recipe.readyInMinutes >= 60){
//                 console.log(recipe.title)
//             }
//         })
//     let test = recipe 

//     console.log(test)
//     test.addEventListener('click',(data)=>{
//         console.log(data)
//     })
//    let btn15 = recipe
//    btn15.addEventListener('click',(data)=>{
//        console.log(data)
//    })
//     if (recipe.readyInMinutes <= 15){
//         console.log (recipe.title)
//     }
//     let btn15 = document.querySelector('#button15')
//     btn15.addEventListener('click', (recipe) => {})
//     let btn30 = document.querySelector('#button30')
//     let btn45 = document.querySelector('#button45')
//     let btn1hour = document.querySelector('#button1hour')
// }
    
