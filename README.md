blue-button-pim
===============

Patient Identification and Matching based on Blue Button data

Overarching modules:


The expected result is 

input -> output.

abstracting this further:

input -> function -> output.

well, what is the input?

In terms of the input, it is the following:

1. The information about the patient.
2. The information wrt the the massive database.
3. Some instruction as to how this layer should find the object. 


** Filter Layer **

Finds a smaller collection of data from the database that we can run our computation algorithms with. 

Inputs:
1. Source that we want to find that are similar to ones in the database
2. Configuration file that specifies the sifting process. Must be configurable?

Outputs:
Return a JSON objects that are candicates matches.

Files:

filter.js -  



standardization procedures:

Social security:

All social security will be in the format:
xxx-xx-xxxx
** Computation layer **


Inputs:

1. DRE information source object
2. Configuration file that specifies:
2.1: The default text comparison algorithm that specifies computation for a field.

deterministic and probablistic models

**Pre-processing functions 
2.2: Some functions that must be run to define the environment for computation. For example, if there is a collection of n objects that you need to compare with, and there are some functions that require some kind of pre-processing that needs to be done before a metric for a field is decided,
then these functions would be run.

** Each metric calculation 
2.2.a: Any subsequent functions that rely on pre-processed data entries would use these values

Files:

compute.js 

** Decision Layer **

This layer gets fed in all the data and numerics for each field/metric, and ultimately decides whether or not matched entries will be accepted.

