"use strict";

exports.isBalanced = isBalanced;


/* 
https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/
    Declare a character stack S.
    Now traverse the expression string exp. 
        // If the current character is a starting bracket (‘(‘ or ‘{‘ or ‘[‘) then push it to stack.
        If the current character is a closing bracket (‘)’ or ‘}’ or ‘]’) then pop from stack and if the popped character is the matching starting bracket then fine else brackets are not balanced.
    After complete traversal, if there is some starting bracket left in stack then “not balanced”
*/
// const stack = ["(", "(", ")",];
// let balanced = true;
// while (stack.length > 0) {
//     cosnt top1 = stack.pop();
//     if (top1 === "(" || top2 === "}") {
//         const top2 = stack.pop();
//     }
//     const top2 = stack.pop();
//     if (top1 !== top2) {
//         console.log("unbalanced!!");
//         balanced = false;
//         break;
//     }
// }
let isBalanced = (input) => {
 
    let brackets = "[]{}()<>"
    let stack = []
  
    for(let bracket of input) {
      let bracketsIndex = brackets.indexOf(bracket)
  
      if (bracketsIndex === -1){
        continue
      }
  
      if(bracketsIndex % 2 === 0) {
        stack.push(bracketsIndex + 1)
      } else {
        if(stack.pop() !== bracketsIndex) {
          return false;
        }
      }
    }
    return stack.length === 0
  }
 
  let input = ["[",")","{","(","]"]
  console.log(isBalanced(input))