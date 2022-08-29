const loadmeal = (search) => {
    const url = `
    https://www.themealdb.com/api/json/v1/1/search.php?s=${search}
    `
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaymeal(data.meals));
};

const displaymeal = (meals) => {

  const mealscontainer = document.getElementById("meal-container");
mealscontainer.innerHTML =``

  meals.forEach((meal) => {
    // console.log(meal);
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("col");
    mealDiv.innerHTML = `
         <div onclick="loadMealDetails(${meal.idMeal})"  class="card h-100">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title"> ${meal.strMeal}</h5>
                      <p class="card-text">${meal.strInstructions.slice(0 ,200)}</p>
                    </div>
                  </div>
         
         `;
         mealscontainer.appendChild(mealDiv)
  });
};
const serchFood = () => {
    const searchField = document.getElementById('searchField');
    const searchText = searchField.value;
    loadmeal(searchText);
    searchField.value= '';
}

const loadMealDetails = (idMeal) =>{
// console.log('get deatails id', idMeal)
const url =`
https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}
`;
// console.log(url)
fetch(url)
.then(res => res.json())
.then(data => displayMealdetails(data.meals[0]))
}
const displayMealdetails = meal => {
  const detailsContainer = document.getElementById('detail-container');
  detailsContainer.innerHTML = '';
  const mealDiv =document.createElement('div');
  mealDiv.classList.add('card')
  mealDiv.innerHTML = `
  
  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>


  `;
  detailsContainer.appendChild(mealDiv)


}

loadmeal('');
