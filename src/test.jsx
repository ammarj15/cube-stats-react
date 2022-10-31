
//dominoes = [[1,2],[2,3],[3,1]];
//dominoes = [[1,2],[2,3], [2,1]];

function dominoChain(dominoes){
  let queue = [];
  let last = dominoes.length - 1;
  if(dominoes[0][0] !== dominoes[last][1]){
    return false
  }
  
  for(let curr = 0; curr < dominoes.length - 1; curr++){
    queue.push(dominoes[curr][1]);
  
    if(queue.pop() !== dominoes[curr+1][0]){
      return false;
      }
    }
  return queue.length === 0;
}; 
  /*
  for(let [dominoe] of dominoes){
    let lastDominoe = dominoes.length - 1;
    //console.log([dominoe][0])
    if([dominoe][0] !== dominoes[lastDominoe][1]){
      return false;
    }
    for(let i = 0; i < dominoes.length-1; i++){
      let curr = dominoes[i][1];
      //console.log(curr)
      if(curr == dominoes[i+1][0]){
          curr == dominoes[i+1][1];
      } else {
        return false;
      }
    }
    return true;
  }
};
*/
dominoes = [[1,2],[2,3],[3,1]];
dominoesTwo = [[1,2],[2,3],[2,1]];
dominoesThree = [[1,1]];
console.log(dominoChain(dominoes));
console.log(dominoChain(dominoesTwo));
console.log(dominoChain(dominoesThree));
/*
write a function to determine whether a domino chain is valid or not. 
The function should take an input of an array of dominos and output a boolean.
 A domino chain is considered valid when the following conditions are met: 
 - adjacent dominoes must have matching numbers - the ends of the chain match 
 (first number of first domino, last number of last domino) While these examples are only length 3, 
please write the function to accept any length domino chain. 
The domino is a tuple represented as a
*/