const form = document.querySelector('#search-form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let query = e.target.search.value
    fetchData(query)
})

function fetchData(query){
    fetch('http://localhost:3000/results')
    .then(res => res.json())
    .then(data => data.forEach(renderMealsCard))
}

function rating(){
    return (
        `<div class="rate">
            <input type="radio" id="star5" name="rate" value="5" />
            <label for="star5" title="text">5 stars</label>
            <input type="radio" id="star4" name="rate" value="4" />
            <label for="star4" title="text">4 stars</label>
            <input type="radio" id="star3" name="rate" value="3" />
            <label for="star3" title="text">3 stars</label>
            <input type="radio" id="star2" name="rate" value="2" />
            <label for="star2" title="text">2 stars</label>
            <input type="radio" id="star1" name="rate" value="1" />
            <label for="star1" title="text">1 star</label>
         </div>`
    )
}

function createModal(){
    return (`<!-- Trigger/Open The Modal -->
        <button id="myBtn">Open Modal</button>
        
        <!-- The Modal -->
        <div id="myModal" class="modal">
        
          <!-- Modal content -->
          <div class="modal-content">
            <span class="close">&times;</span>
            <p>Some text in the Modal..</p>
          </div>
        
        </div>`)
}

function renderMealsCard(mealInfo){
    let divFrame = document.createElement('div')
    let title = document.createElement('h2')
    let img = document.createElement('img')
    title.textContent = mealInfo.title
    img.src = mealInfo.image

    let ratingStars = document.createElement('p')
    ratingStars.innerHTML = rating()


    let myModal = document.createElement('div')
    myModal.innerHTML = createModal()

    //user ratings-- will only work with mock json data
    let avgRating = mealInfo.userRating
    let pRating = document.createElement('p')
    pRating.textContent = `User Rating: ${avgRating}`

    //review form
    let reviewForm = document.createElement("form");
    reviewForm.setAttribute("class", "review_form")
    let review = document.createElement("input");
    review.setAttribute("type", "text");
    review.setAttribute("name", "review");
    review.setAttribute("placeholder", "Leave a review...");
    let reviewButton = document.createElement("button");
    reviewButton.setAttribute("type", "submit");
    reviewButton.textContent = "Submit"
    reviewForm.append(review, reviewButton)
    //new review event listener
    let ul = document.createElement("ul")
    reviewForm.addEventListener("submit", (e) => {
        e.preventDefault()
        let newReview = document.createElement("li")
        newReview.textContent = e.target.review.value
        ul.append(newReview)
        e.target.review.value = ""
    })
    reviewForm.append(ul)

    let container = document.querySelector('#search-results')
    divFrame.append(title, img, myModal, pRating, ratingStars, reviewForm)
    container.append(divFrame)

    //Modal Functionality 
    let modal = document.querySelector('#myModal');
    let btn = document.querySelector('#myBtn');
    let span = document.querySelector('.close');

    btn.addEventListener('click', function() { 
        modal.style.display = "block";
        let pText = document.querySelector('.modal-content p')
        pText.textContent = mealInfo.title;
    })
    span.onclick = function() {modal.style.display = "none";}
    window.onclick = function(event) {
        if (event.target == modal) {modal.style.display = "none";} }

}

