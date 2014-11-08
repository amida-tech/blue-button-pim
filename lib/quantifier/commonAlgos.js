




//setup function look up table.

/*the absolute string match is an example of a function that you can custom define
this returns the string comparison numberic is either 1 or 0. */
function absoluteStringMatch(str1, str2, weight){
	//weight could be a configuration file

	if(str1 === str2){
		return 1;
	}
	else{
		return 0;
	}
}


//function was taken off of web in a wikibook
function longestCommonSubstring(string1, string2){
	// init max value
	var longestCommonSubstring = 0;
	// init 2D array with 0
	var table = [],
            len1 = string1.length,
            len2 = string2.length,
            row, col;
	for(row = 0; row <= len1; row++){
		table[row] = [];
		for(col = 0; col <= len2; col++){
			table[row][col] = 0;
		}
	}
	// fill table
        var i, j;
	for(i = 0; i < len1; i++){
		for(j = 0; j < len2; j++){
			if(string1[i]==string2[j]){
				if(table[i][j] == 0){
					table[i+1][j+1] = 1;
				} else {
					table[i+1][j+1] = table[i][j] + 1;
				}
				if(table[i+1][j+1] > longestCommonSubstring){
					longestCommonSubstring = table[i+1][j+1];
				}
			} else {
				table[i+1][j+1] = 0;
			}
		}
	}
	return longestCommonSubstring;
}

function simpleName(name1, name2){
    if(name1.first === name2.first && name1.last===name2.last){
        return 1;
    }
    else{
        return 0;
    }
}

function simpleDate(date1, date2){
    //very simple point date comparison with same precision
    if( date1.point && date2.point && date1.point.date === date2.point.date){
        return 1;
    }
    else{
        return 0;
    }
}

//would also probably need longest common subsequence as well.

module.exports.lcs = longestCommonSubstring;
module.exports.absoluteStringMatch = absoluteStringMatch;
module.exports.simpleName = simpleName;
module.exports.simpleDate = simpleDate;

