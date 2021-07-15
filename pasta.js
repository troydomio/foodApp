let requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=f5417bdd6bda489abd6fbff682765e71&query=pasta", requestOptions)
    .then(response => response.text())
    .then(result => {
        console.log(result)
        let btn = document.querySelector('input')
        btn.addEventListener('click', function(){
            fetch(`${BASEURL}${apiKey}${results[0].id}`)
        })

    })
    .catch(error => console.log('error', error));
