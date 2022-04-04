import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


export default function Arrowfun() {


    const code= `// Traditional Anonymous Function
function (a, b){
    return a + b + 100;
  }
  
  // Arrow Function
  (a, b) => a + b + 100;
  
  // Traditional Anonymous Function (no arguments)
  let a = 4;
  let b = 2;
  function (){
    return a + b + 100;
  }
  
  // Arrow Function (no arguments)
  let a = 4;
  let b = 2;
  () => a + b + 100;
  
  let add = (x, y) => x + y;

console.log(add(10, 20)); // 30;

let numbers = [4,2,6];
numbers.sort(function(a,b){ 
    return b - a; 
});
console.log(numbers); // [6,4,2]

let numbers = [4,2,6];
numbers.sort((a,b) => b - a);
console.log(numbers); // [6,4,2]`.trim();
  
    return (
        <div>
        <SyntaxHighlighter language="javascript" style={docco}>
            {code}
        </SyntaxHighlighter>
        </div>
    )
}
