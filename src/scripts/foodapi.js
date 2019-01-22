fetch("http://localhost:8088/foods")
    .then(foods => foods.json())
    .then(parsedFoods => {
        console.table(parsedFoods)
        parsedFoods.forEach(foods => {
            const foodAsHTML = foodFactory(foods)
            addFoodToDom(foodAsHTML)
        })
    })


    const foodFactory = foods => {
        return `
        <div class="foodContainer">
            <h2 class = "foods" >${foods.name}</h2>
            <p class = "foods" >${foods.ethnicity}</p>
            <p class = "foods" >${foods.category} </p>
        </div>
        `
    }
       






    const addFoodToDom = foodAsHTML => {
document.querySelector(".foodList").innerHTML  += foodAsHTML} 

// fetch(foods)
