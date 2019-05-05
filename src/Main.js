let goodCompanyTrees = {};
let goodCompanyTreeCount = 0;
let badCompanyTreeCount = 0;
let currentGoodCompanyIndex = 0;

//

function plantTrees(companyName, noOfTrees) {

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

function removeTrees(noOfTrees)
{
	// display badCompanyTreeCount, good company name and no of trees > 0, swipe left button, and swipe right button w/ input box
	// if user inputs number and presses swipe right, then call swipeRight
	// if user inputs presses swipe left, then call swipeLeft
			// move to next company
			// keep going until badCompanyTreeCount === 0
	
}

// TODO
function swipeLeft() 
{

}

// TODO
function swipeRight() 
{
	if (goodCompanyTrees[currentGoodCompanyIndex] >= document.getElementById("#swipeRightVal")) {
		
	}
}