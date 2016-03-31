function colorFactoryFactory(colorName) {

  function paintCanMaker() {
    console.log("Here is a " + colorName + " factory!");
  }
  return paintCanMaker;
}

var redCanMaker = colorFactoryFactory("red");
var blueCanMaker = colorFactoryFactory("blue");
var greenCanMaker = colorFactoryFactory("green");

blueCanMaker();
redCanMaker();
greenCanMaker();

function trackCalories(baselineCalories) {
 //totalCalories today
 var totalCaloriesToday = 0;
 //totalCalories all time
 var totalCaloriesAllTime = 0;
 //personalBaselineCalories
   //In the parameters
 var totalDays = 0;


 //addCalories()
 function reportEating(totalCaloriesConsumed){
   totalCaloriesToday += totalCaloriesConsumed;
 }
 //startNewDay()
 function startNewDay(){
   totalCaloriesAllTime += totalCaloriesToday;
   totalCaloriesToday = 0;
 }
 //estimated weight loss today()
 function getTodaysWeightLoss() {
   //3500Cal = 1lb
   //today - baseline / 3500
   return (totalCaloriesToday - baselineCalories) / 3500;
 }
 //estimated weight loss all time()
   function getAllTimeWeightLoss() {
   //3500Cal = 1lb
   //today - baseline / 3500
   return (totalCaloriesAllTime - (baselineCalories * totalDays)) / 3500;
 }

 return {
   reportEating: reportEating,
   startNewDay: startNewDay,
   getTodaysWeightLoss: getTodaysWeightLoss,
   getAllTimeWeightLoss: getAllTimeWeightLoss
 };
}

var wuansTracker = trackCalories(2300);
var pingsTracker = trackCalories(1800);
var sumoTracker = trackCalories(8500);

sumoTracker.reportEating(12000);
sumoTracker.startNewDay();
sumoTracker.reportEating(18000);

console.log(sumoTracker.getTodaysWeightLoss());
console.log(sumoTracker.getAllTimeWeightLoss());

http://jsbin.com/loxecajiji/edit?js,console
var cat = {
  name: "Dinah",
  type: "Calico",
  weight: 34,
  mood: "grumpy",
  color: "snickers",
}

//Dot notation
//get - Not on the left side of a single equals
if(cat.weight > 17){
  console.log(cat.weight);
}

var catWeight = cat.weight;

function forSomeReasonWeCareAboutCatWeight(weight){
  console.log("We care, and your cat weighs : " + weight)
}

forSomeReasonWeCareAboutCatWeight(cat.weight);

//set - When on the left side of a single equals
cat.weight = 32;


//square bracket notation
//get - Not on the left side of a single equals
if(cat["weight"] > 17){console.log(cat.weight);}
var weightProp = "weight";
if(cat[weightProp] > 17){console.log(cat.weight);}

var catWeight = cat["weight"];

function forSomeReasonWeCareAboutCatWeight(weight){
  console.log("We care, and your cat weighs : " + weight)
}

forSomeReasonWeCareAboutCatWeight(cat["weight"]);

//set - When on the left side of a single equals
cat["weight"] = 32;

var outfit = {
  shirt: {
    color: "blue",
    size: "M",
    style: "spandex"
  },
  pants: {
    color: "orange",
    size: "XS",
    style: "denim"
  }
}

//get
outfit.shirt.color

if(outfit.pants.size === "XS"){
  console.log("cringe");
}

for
//set

outfit.shirt.style = "cotton t";


var calc = {
  total: 0
}

calc.total += 7;
calc.total -= 3;
calc.total = (calc.total * 33)
calc.total = calc.total / 100

console.log(calc.total)
