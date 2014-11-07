
//defuault decision configuration
var deciderConfig = {

    'base_match_threshold': 90,

    'acceptable_ranges':{



    }

    /*criteria that makes a certain dataset autoaccept it.
    For example, if the social security match is 95%, decider classifies the
    entire set of data as a match */

    'auto_acceptance':{


    }

    /*similar to auto acceptance, this auto-rejects the dataset if certain 
    conditions are unmet */


    'auto_rejection': {
    	'name': 0,
    },
    /*specifies weights for some of specified fields. If the field does 
    not have a specified weight, it defaults to 1. */
    'weights':{

    }


    /*specify certain combinations that allow for patients to be matched. For
	example, if you want a criteria that social security has to be greater 
	than 50%, and name has to be greater than 50%, then you specify those 
	criterias. This will be implemented later */
    'decision_profiles':{



    }

}

/*

Notes:
base_match_threshold: This is the minimum amount of match metric to be counted
as a match

rejection criteria: This object defines whaat kind of objects will cause the
patient data file to be completely rejected.

For example, if the name match is 0%, and the file specifies:

auto_rejection : {


}




module.deciderConfig = deciderConfig;
