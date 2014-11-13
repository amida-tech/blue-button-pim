
//var require('siftConfig.js');


//this function accepts a json file that has the demographics information

/*inputObj for now is a JSON object, and reqSections is an array of objects that
should be extracted from the raw input Object */

/* reqsections should be generatlized so that you can either 

1. Specify the data section that you want, OR
2. Specify the data sections that you don't want. 

*/
//this needs to be implemented as a recursive search later, or something smarter
//side comment: Totally unrelated, but signal processing classes could definitely 
//provide some insight to use some of the analog EE concepts to apply to maybe
//some CS filtering issues? 0.0. 

function purify(inputObj, reqSections)
{
	var purifiedObj = {}; //return JSON file

	for(var index in reqSections){
		var sectionKey = reqSections[index];
		if(inputObj.hasOwnProperty(sectionKey)){
			purifiedObj[sectionKey] = inputObj[sectionKey];
		}
		//need to check if there is a duplicate already in JSON object
		//for example. if there is a name field already, then what should happen?
	}
	return purifiedObj;
}
module.exports.purify = purify;


function standardizeSocialSecurity(inputString){


	
}