// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
];

// We're going to solve this by breaking the problem into three parts.
// Programmers like automating things, we'll populate the HTML drop down options using code,
// instead of having to type out all the values.
// Create a function that does the some math and gives us the new weight.
// Then create a function that responds when the user clicks on the button.

// 1. Populate the dropdown element with the data found in the planets array.
// The value of each option should be the planet's name.
// Use the following built-in methods:
// `.forEach` `document.createElement` `document.getElementById` `.appendChild`
var select = document.getElementById('planets');

planets.forEach(function(planet) {
        var planetName = planet[0];
        //var planetgvalue = planet[0];
        var option = document.createElement("option");
        option.value = planetName;
        option.innerText = planetName;
        select.appendChild(option);
});



function calculateWeight(weight, planetName) {
// 2. Write the code to return the correct weight
//find planetName inside planets array, get weight
    var result;
    planets.forEach(function(planet) {
        if (planet[0] == planetName) {
            result = weight * planet[1];    
        }
    });
    return result;
   
}

function handleClickEvent(e) {
// 3. Create a variable called userWeight and assign the value of the user's weight.
// 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
// 5. Create a variable called result and assign the value of the new calculated weight.
// 6. Write code to display the message shown in the screenshot.
    var userWeight = document.getElementById('user-weight').value;
    var planetName = select.value;
    var result = calculateWeight(userWeight, planetName);
    document.getElementById('output').innerHTML = "If you were on "+planetName+", you would weigh "+result+"lbs!";
}

document.getElementById('calculate-button').addEventListener("click", handleClickEvent);