

var commonAlgos = require('./commonAlgos');


//compute values 
function compute(inputObj, outputObj, configJSON){

	//this part compares each individual component of source patient to 
	//candidate patients, and aggregates percentages based on each value

	for(var key in inputObj){
		if(outputObj.hasOwnProperty (key)){
			//run function to compare those two values
			//obtain percentage/metric value
			
		}

	}
	

	/*Q: Should this be a comparison loop that goes from 
	source object to output object, or vice versa?

	//Right now, comparing goes form output to input

}

//what would the weighted comparison object look like?

//should not having some v
/*
{
	'data':{
		'source': [JSON OBJECT]
		'match': [JSON OBJECT]
	}
	'results':{
	

	//need a reserved key word for total percentage here. 
	}

}

*/
module.exports.compute = compute;