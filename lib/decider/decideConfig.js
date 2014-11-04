var deciderConfig = {

    'base_match_threshold': 90,

    'acceptable_ranges':{



    }

    /*criteria that makes a certain dataset autoaccept it.
    For example, if the social security match is 95%, decider classifies the
    entire set of data as a match */

    'auto_acceptance':{


    }

    //similar to auto acceptance, this auto-rejects the dataset.

    'auto_rejection': {





    },

    'acceptance_profiles':{

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
