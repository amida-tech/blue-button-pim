

var commonAlgos = require('./commonAlgos');


//compute values 
function compute(inputObj, candidateObj, configJSON){

	//this part compares each individual component of source patient to 
	//candidate patients, and aggregates percentages based on each value

	var weightObj = {};

	for(var key in inputObj){
		if candidateObj.hasOwnProperty (key)){

			//we also need to find the upper bound of total points allocated to matching?



			//for now, we'll only run direction comparison of each value. 
			var weightValue = commonAlgos.absoluteStringMatch(inputObj[key], candidateObj[key]);
			weightObj[key] = weightValue;

			//run function to compare those two values
			//obtain percentage/metric value
			
		}

	}
}
	


//this function finds the maximum possible score that one can possibly obtain.
//for example, if you were to compare object 1 to object 1, you should get the 
//maximum score.
function findMaxWeights(inputObj, candidateObj, configJSON){


	//compare two objects, object one and object two against each other to 
	//get the length of object that has least amount of keys

	var inputObjLen = Object.keys(inputObj).length;
	var candidateObjLen = Object.keys(inputObj).length;


	if(inputobjLen < candidateObjLen){

		

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