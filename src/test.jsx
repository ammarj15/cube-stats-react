
  
  if(array[0][0] != array[2][1]){
    return false;
  }

  return true;
}

write a function to determine whether a domino chain is valid or not. 
The function should take an input of an array of dominos and output a boolean.
 A domino chain is considered valid when the following conditions are met: 
 - adjacent dominoes must have matching numbers - the ends of the chain match 
 (first number of first domino, last number of last domino) While these examples are only length 3, 
please write the function to accept any length domino chain. 
The domino is a tuple represented as a