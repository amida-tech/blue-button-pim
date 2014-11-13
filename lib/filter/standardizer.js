

//quick formatting of names to lower case and to remove extraneous things
function standardizeNames(inputString){

}


function standardizeSocialSecurity(inputString){
	//social security is in the format

	//case 1: Social security is in the format xxx-xx-xxxx

	//case 2: Social security is in the format xxxxxxxxx

	//case 3: Social security is in the format xxx xx xxxx

	inputString = inputString.trim();
	var standardizedString = "":

	if(inputString.length == 9){
		//loop and check if all of them are numbers
		for
	}

	//this is for when the number is 
	for( var x = 0; x< inputString.length; x++){
		if(!isNaN(inputString[x]){
			standardizedString+=inputString[x];
		}
		if(standardizedString.length == 3){
			standardizedString+='-';
		}

	}


}


module.exports.standardizeSocialSecurity = module.exports.standardizeSocialSecurity;