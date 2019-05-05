let goodCompanyTrees = {};
let goodCompanyTreeCount = 0;
let badCompanyTreeCount = 0;
let currentGoodCompanyIndex = 0;
let ifLeft;

function redirectToPlantTrees() 
{
    window.location.href = "plantTreesSuccessPage.html";
}

function redirectToRemoveTrees() 
{
    
    var x = document.getElementById("tree").value;

  /*   console.log(x); */

    window.location.href = "matchingPage.html?trees="+x;

}

function redirectToTotalMatchSuccess()
{
    window.location.href = "matchSuccessPage.html";
}

function loadPlantTreesMsg() 
{
    let msgDiv = document.getElementById("plantTreesMsg");
    let noTreesToPlant = document.getElementById("noTreesToPlant");
    let msg = `<h1>Thank you for adding trees to a total of ${goodCompanyTreeCount} trees planted so far!</h1>`;
    msgDiv.insertAdjacentHTML('afterbegin', `<div>${msg}</div>`);
}

function plantTrees(companyName, noOfTrees)
{
    if (companyName == null || companyName === undefined || companyName === "") {
        console.error("companyName is not valid input");
    }

    if (noOfTrees == null || noOfTrees === undefined || noOfTrees === 0) {
        console.error("noOfTrees is not valid input");
    }

    else if (companyName in goodCompanyTrees) {
        // company already exists just add new values to it
        goodCompanyTrees[companyName] = noOfTrees;
        goodCompanyTreeCount += noOfTrees;

    } else {
        // otherwise insert new key value pair
        goodCompanyTrees[companyName] = noOfTrees;
        goodCompanyTreeCount += noOfTrees;
    }
}

/*function removeTrees(noOfTrees)
{

    badCompanyTreeCount = document.getElementById("numberOfTreesToCutDown");

    if (goodCompanyTreeCount < badCompanyTreeCount) {
        // dont run program
    }
	// display badCompanyTreeCount, good company name and no of trees > 0, swipe left button, and swipe right button w/ input box
	// if user inputs number and presses swipe right, then call swipeRight
	// if user inputs presses swipe left, then call swipeLeft
			// move to next company
			// keep going until badCompanyTreeCount === 0
	
} */

function recursionFunction() {

    currentGoodCompanyIndex = currentGoodCompanyIndex % (Object.keys(goodCompanyTrees).length);

    if (goodCompanyTrees[currentGoodCompanyIndex] == 0) {
        currentGoodCompanyIndex++;
        //recursive functon
    }

    if (badCompanyTreeCount == 0) {
        return;
    }

    // at bob
    // at john
    //    swiped right: 2
    //    badCompanyTreeCount = 3
    //    goodCompanyTreeCount = 22
    // at sara
    //    swiped left
    //    index is now 3
    //    index back to 0


    if (ifLeft === true) {
        // do nothing go to next index
        currentGoodCompanyIndex++;
        recursionFunction();
    }

    if (ifLeft === false) {
        let selectedTreesToCut = document.getElementById("selectedTreesToCut");
        badCompanyTreeCount -= selectedTreesToCut;
        goodCompanyTrees[currentGoodCompanyIndex] -= selectedTreesToCut;
        currentGoodCompanyIndex++;
        recursionFunction();
    }
}

// TODO
function swipeLeft() 
{
	ifLeft == true;
	recursionFunction();
}

// TODO
function swipeRight() 
{
	ifLeft == false;
	/*if (goodCompanyTrees[currentGoodCompanyIndex] >= document.getElementById("#swipeRightVal")) {
		
	}*/
	recursionFunction();
}

function array(){

    var gc=['Tree','df','gy'];

    return gc;
}