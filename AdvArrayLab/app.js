
//Dataset
let dishes = [
    {
        "id": 1,
        "name": "Pizza",
        "cuisine": "Italian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 2,
        "name": "Spaghetti",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 3,
        "name": "Ravioli",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 4,
        "name": "Enchiladas",
        "cuisine": "Mexican",
        "servings": 6,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 5,
        "name": "Tacos",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 6,
        "name": "Burrito Supreme",
        "cuisine": "Mexican",
        "servings": 1,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 7,
        "name": "Elote",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["corn", "cheese"]
    },
    {
        "id": 8,
        "name": "Crepes",
        "cuisine": "French",
        "servings": 1,
        "ingredients": ["flour", "sugar"]
    },
    {
        "id": 9,
        "name": "Corned Beef & Cabbage",
        "cuisine": "Irish",
        "servings": 10,
        "ingredients": ["beef", "cabbage"]
    },
    {
        "id": 10,
        "name": "Beef Stew",
        "cuisine": "Irish",
        "servings": 8,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 11,
        "name": "Lasagna",
        "cuisine": "Vegetarian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 12,
        "name": "Falafel",
        "cuisine": "Vegetarian",
        "servings": 1,
        "ingredients": ["chickpea", "parsley"]
    },
    {
        "id": 13,
        "name": "Chili",
        "cuisine": "Vegetarian",
        "servings": 13,
        "ingredients": ["tomato", "chickpea"]
    },
    {
        "id": 14,
        "name": "Goulash",
        "cuisine": "Hungarian",
        "servings": 15,
        "ingredients": ["beef", "tomato"]
    },
]

//Example function
function findMexicanFood(){
    //Debug tip: Add a console.log(el) inside the filter function to get a visualization of what el represents and see all its properties
    let results = dishes.filter(function(el){
        if(el.cuisine === "Mexican"){
            return true;
        }
        else{
            return false;
        }})

    //Debug tip: Place a Breakpoint on the return AFTER the filter, then hover over "results" to see results of filter without having to step through the whole thing!

    return results;
}

let mexicanFood = findMexicanFood();
console.log('Mexican Foods: ', mexicanFood)

 
//1. Create a function that will return all dishes with the cuisine type of "vegetarian"
//Filter
function findVegetarianFood(){
    let results = dishes.filter(function(el){
        if(el.cuisine === "Vegetarian"){
            return true;
        }
        else{
            return false;
        }
    })
    return results;
}
let vegetarianFood = findVegetarianFood();
console.log('Vegetarian Foods:',vegetarianFood )

function problemOne(){

    let results;


    return results;
}

//2. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter
function findItalianFoodGreaterThanFive(){
    let results = dishes.filter(function(el){
        if(el.cuisine === "Italian" && el.servings >= 5){
            return true;

        }
        else{
            return false;
        }})
     
    return results;
}
let italianFood = findItalianFoodGreaterThanFive();
console.log('Italian Foods with 5+ servings:',italianFood )

//3. Create a function that will return only dishes whose serving id number matches their serving count.
//Filter
function problemThree(){
    let results = dishes.filter(function(el){
        if (el.servings === el.id){
            return true;
        }
        else{
            return false
        }})
        return results
}
let servingsId = problemThree();
console.log('Dishes with servings equal to ID:', servingsId)
//4. Create a function that will return only dishes whose serving count is even.
//Filter
function problemFour(){
    let results = dishes.filter(function(el){
        if (el.servings %2 === 0){
            return true;
        }
        else{
            return false;
        }})
        return results
}
let evenServingDishes = problemFour()
console.log('Dishes with an even number servings:', evenServingDishes)

//5. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter
function problemFive(){
    let results = dishes.filter(function(el){
        if (el.ingredients.includes ("chickpea")) {
            return true;
        }
        else {
            return false;
        }
    })
    return results;
}
let chickpeadishes = problemFive();
console.log("chickpea dishes:", chickpeadishes);


//6a. Create a function that will return an array of only the names of the cuisine types. Ie ['Italian', 'Mexican', ...]
//Map
function problemSixA(){
    let results = dishes.map(function(el){
        return el.cuisine;
    })
    return results;
}
let dishCuisineTypes = problemSixA();
console.log('The Cuisine type of the dishes are:', dishCuisineTypes)
// BONUS: (come back to this after finishing all)
//6b. Use the filter method to eliminate duplicates, leaving only distinct values in the array

//7. Create a function that will append the cuisine type to the start of the dish's name. Ie, "Italian Pizza"
//Map 
function problemSeven(){

    let results = dishes.map(function(el){
        return `${el.cuisine} ${el.name}`
    })
    return results;
}
    let cuisineNameDish = problemSeven()

///let descriptiveName = cuisineTypeDish();
console.log(cuisineNameDish)

//8. Create a function that will append the cuisine type to the start of the dish's name. Then, return only the Vegetarian dish objects. So this function should return objects 11-13 with their names changed to "Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"
//Map, Filter
function problemEight(){

    let results = dishes.map(function(el){
        return el.cuisine + ' ' + el.name
    })
    let filteredResults = results.filter(function(el){
        if(el.includes('Vegetarian')){
            return true;
        }
        else{
            return false
        }})
    return filteredResults
}

let cuisineTypeNames = problemEight();
console.log('The menu is:', cuisineTypeNames)


//BONUS

//9. Create a function that will return dishes whose ingredients array INCLUDES "tomato" OR "cheese".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter
function problemNine() {
    let results = dishes.filter(function(el){
        return el.ingredients.includes('tomato')||el.ingredients.includes('cheese');
    })
    return results;
}
let tomatoOrCheese = problemNine();
console.log('Tomato or Cheese Dishes : ', tomatoOrCheese, '\n' )



//10. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.



//11. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.
