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


** Sifting Layer

Inputs:
1. Source that we want to find that are similar to ones in the database
2. Configuration file that specifies the sifting process. Must be configurable?

Outputs:
Return a JSON objects that are candicates matches.

** Computation layer

Inputs:

1. DRE information source object
2. Configuration file that specifies:

**. The default text comparison algorithm that specifies computation for a field.
**. 


