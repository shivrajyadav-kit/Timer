let chaiTypes = ["Masala  Chai","Ginger Chai","Green Chai","Lemon Tea"]

console.log(chaiTypes[2]);

console.log(`Total chai Types: ${chaiTypes.length}`);

chaiTypes.push("Herbal Tea");
const data = chaiTypes.pop();
console.log(data);





let index = chaiTypes.indexOf("Green-Tea");

if(index !== -1) {
    chaiTypes.splice(index, 1)
}

// 

chaiTypes.forEach((chai,index) =>  {
    console.log(`${index + 1}; ${chai}`)
});

let moreChaiTypes = ["0olong Tea", "white Tea"]

let allChaiTypes = chaiTypes.concat(moreChaiTypes);

let newChaiTypes = [...chaiTypes, "Chamolina Tea"
];
console.log(newChaiTypes);


let chaiRecipe = {
    name: "Masala Chai",
    ingredients: {
        teaLevels: "Assam Tea",
        milk: "Full Cream Milk",
        sugar:"Brown sugar",
        spices: ["Daalchini","Ginger"],
    },
    instruction: "Boil water, add tea leaves,milk,sugar and spices",
};


let updatedChaiRecipe = {
    ...chaiRecipe,
    instruction: "Boil water, add tea leaves,milk, sugar and spices, some love",
};
let {name, ingredients} = chaiRecipe;
let [firstChai, secondChai] = chaiTypes;



 console.log(ingredients);
 console.log(secondChai);






 let expenses = [
    {description: "Groceries",amount:50,caregory:"Food"},
    {description: "Electric Bill",amount:100,caregory:"Utilities"},
    {description: "Dinner",amount:30,caregory:"Food"},
    {description: "Internet Bill",amount:50, caregory:"Utilities"},
 ];

 let expenseReport = expenses.reduce((report, expense) => {
    report[expense.category] += expense.amount;

    return report;
 },

{ Food: 0, Utilities: 0}
);


 console.log("Expense Report", expenseReport);





 let tasks = [
    { description: "Write report", completed: false, priority: 2},
    { description: "Send email ", completed: true, priority: 3},
    { description: "Prepare presentation", completed: false, priority: 1},
 ];

 let pendingSortedTasks = tasks
 .filter((tasks) => tasks.completed)
 .sort((a, b) => a.priority - b.priority); 

 console.log(pendingSortedTasks);



let movieRatings = [
    { title: "Movie A", ratings: [4,5,3]},
    { title: "Movie B", ratings: [5,5,4]},
    { title: "Movie C", ratings: [3,4,2]},


];

let averageRatings = movieRatings.map((movie) => {
    let total = movie.ratings.reduce((sum, rating) => sum + rating, 0);
    let average = total / movie.ratings.length
    return {title: movie.title, averageRatings: average.toFixed(2)}
});
console.log(averageRatings);
console.log(movieRatings);



