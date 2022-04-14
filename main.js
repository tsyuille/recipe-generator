document.querySelector('button').addEventListener('click', getFood)
function getFood() {
    const food = document.querySelector('input').value
    let foodURL = food.split(' ').join('%20')

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=` + foodURL)
    .then(res => res.json()) 
    .then(data => {
      window.localStorage.setItem('data', JSON.stringify(data))
      if(data.meals.length > 1) {
        document.querySelector('#prev').style.display = 'inline-block'
        document.querySelector('#next').style.display = 'inline-block'

        document.querySelector('#prev').addEventListener('click', nextFood)
        document.querySelector('#next').addEventListener('click', nextFood)
      }

      document.querySelector('h2').innerText = data.meals[0].strMeal
      document.querySelector('img').src = data.meals[0].strMealThumb
      document.querySelector('h3').innerText = data.meals[0].strInstructions
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function nextFood() {
  let data = JSON.parse(window.localStorage.getItem('data'))
  let mealsArray = data.meals
  let currentMeal = document.querySelector('h2').innerText
  let currentMealIndex= 0
  let nextMealIndex = 0

  for(let i = 0; i < mealsArray.length; i++) {
    if (mealsArray[i].strMeal === currentMeal) {
      currentMealIndex = i
    }
  }
  // when next is clicked
  if(this.id === 'next') {
    if (currentMealIndex === mealsArray.length -1) {
      nextMealIndex = 0
    } else {
      nextMealIndex = currentMealIndex + 1
    }
    document.querySelector('h2').innerText = mealsArray[nextMealIndex].strMeal
    document.querySelector('img').src = mealsArray[nextMealIndex].strMealThumb
    document.querySelector('h3').innerText = mealsArray[nextMealIndex].strInstructions
  }
  // when previous is clicked
  if(this.id === 'prev') {
    if(currentMealIndex === 0) {
      nextMealIndex = mealsArray.length - 1
    } else {
      nextMealIndex = currentMealIndex - 1
    }
    document.querySelector('h2').innerText = mealsArray[nextMealIndex].strMeal
    document.querySelector('img').src = mealsArray[nextMealIndex].strMealThumb
    document.querySelector('h3').innerText = mealsArray[nextMealIndex].strInstructions
  }
}