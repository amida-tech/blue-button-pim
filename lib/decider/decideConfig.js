var deciderConfig = {

    'base_match_threshold': 90,

    'acceptable_ranges':{



    }

    'auto_rejection': {





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
