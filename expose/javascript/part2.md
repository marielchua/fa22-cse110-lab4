1. At line 12, the current value of `i` will be printed as follows because it has function scope with `var` and can be accessed outside of the for-loop it is declared in: `3`
2. At line 13, the current value of `discountedPrice` will be printed as follows because it has function scope with `var` and can be accessed outside of the for-loop it is declared in: `150`
3. At line 14, the current value of `finalPrice` will be printed as follows because it has function scope with `var`: `150`
4. This function will return the array `discounted`, where `discounted` is the array: `[50, 100, 150]`; It is accesible because the array was defined with `var`, meaning it has function scope once it is declared.
5. At line 12, this code causes an error, since `i` is declared with `let` in the for loop and thus is within the scope of the for-loop only.
6. At line 13, this code causes an error, since `discountedPrice` is declared with `let` in the for loop and thus is within the scope of the for-loop only.
7. At line 14, the current value of `finalPrice` will be printed as follows, because the print statement is in the same block where `finalPrice` is declared with `let`: `150` 
8. This function will return the array `discounted`, where `discounted` is the array: `[50, 100, 150]`;This is because the array was declared with `let`, meaning it has block scope, but we are returning `discounted` in the same block as the declaration so it is valid.
9. At line 11, the code causes an error because `i` is declared with `let` in the for loop and thus is within the scope of the for-loop only.
10. At line 12, the current value of `length` is printed as follows, as it is declared with `const` and there is no attempt to reassign it: `3`
11. This function will return the array `discounted`, which at the return is the array: `[50, 100, 150]`; This is because the `const` used in its declaration does not mean the array itself is constant, but the reference, `discounted` cannot be reassigned to a different array. Thus, pushing to `discounted` in the for loop is allowed.
12. Data types Q's
    1.  A) student.name
    2.  B) student['Grad Year']
    3.  C) student.greeting()
    4.  D) student['Favorite Teacher'].name
    5.  E) student.courseLoad[0]
13. Arithmetic
    1.  A) '32', integers map to their exact string representation, so adding these is like concatenation
    2.  B) 1, integers map to their exact string representation, and since you don't subtract strings from strings, it uses '3' as its integer for integer subtraction
    3.  C) 3, adding an integer to null, which has an number value of 0
    4.  D) '3null', string is concatenated with string representation of `null`, which is 'null'
    5.  E) 4, adding an integer to true, which has a number value of 1
    6.  F) 0, both false and null have number values of 0
    7.  G) '3undefined', undefined type has string representation as 'undefined', just concatenates to the string '3'
    8.  H) NaN, subtraction causes '3' to be seen as it integer representation, but undefined does not have a valid number representation (Nan), so difference is NaN as well
14. Comparison
    1.  A) true, '2' becomes the number 2, which is greater than 1
    2.  B) false, '2' is lexicographically greater than the first character of the string '12', so '2' is greater
    3.  C) true, '2' is turned into the number 2 for comparison, which equals 2
    4.  D) false, 2 and '2' are of different types, so === will return false
    5.  E) false, true's number representation is 1, which is not equal to 2
    6.  F) true, Boolean(2) converts any non-zero integer to true, which is of equivalent type and value as true 
15. == can check whether two things of different OR same types are equivalent based on the representations of each one in other types. ===, on the other hand, is a strict comparison that only will compare the two if they are the same type to begin with.
16. See js file
17. The result of the function returns newArr, which is the array `[2, 4, 6]` at the end of the function. Upon first calling the function with the given parameters, the array is declared and initialized to be empty, and its reference is constant. The for-loop iterates through each element of the input array and calls doSomething as the callback function with the current element as the input. doSomething then returns the inputted element multiplied by 2, and the result is pushed to the new array. By the end of the for-loop, newArr is filled with each element of the inputted array doubled.
18. See js file
19. The output of the given code are the integers in the order `1 4 3 2`; This is because 1 and 4 are printed immediately, then followed by in the setTimeOut 3 whose delay is 0 so it follows soon after (because it is scheduled to run at the next opportunity, not immediately, so it goes after the two calls to console.log), then finally 2 when the 1000 millisecond timer runs out.