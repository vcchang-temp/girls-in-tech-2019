let goodCompanyTrees = {};
let goodCompanyTreeCount = 0;
let badCompanyTreeCount = 0;


function submit(checkboxVal, companyName, noOfTrees)
{
	if (checkboxVal)
	{
		//Good Company logic
		executeGoodCompanyLogic(companyName, noOfTrees);
	}
	else
	{
		//Bad Company Logic
		executeBadCompanyLogic(noOfTrees);
	}
}

function executeGoodCompanyLogic(companyName, noOfTrees)
{
	if (companyName in goodCompanyTrees) {

		goodCompanyTrees[companyName] = noOfTrees;
        goodCompanyTreeCount += noOfTrees;

	} else {
        // otherwise insert new key value pair
        goodCompanyTrees[companyName] = noOfTrees;
        goodCompanyTreeCount += noOfTrees;
	}
}

function executeBadCompanyLogic(noOfTrees) 
{

}