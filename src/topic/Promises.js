import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


export default function Promises() {


    const code= `The methods promise.then(), promise.catch(), and promise.finally() 
    are used to associate further action with a promise that becomes settled.

    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('foo');
        }, 300);
      });
      
      myPromise
        .then(handleResolvedA, handleRejectedA)
        .then(handleResolvedB, handleRejectedB)
        .then(handleResolvedC, handleRejectedC);

// To experiment with error handling, "threshold" values cause errors randomly
const THRESHOLD_A = 8; // can use zero 0 to guarantee error

function tetheredGetNumber(resolve, reject) {
  try {
    setTimeout(
      function() {
        const randomInt = Date.now();
        const value = randomInt % 10;
        try {
          if(value >= THRESHOLD_A) {
            throw new Error('Too large: ${'value'}');
          }
        } catch(msg) {
            reject('Error in callback ${'msg'}');
        }
      resolve(value);
      return;
    }, 500);
    // To experiment with error at set-up, uncomment the following 'throw'.
    // throw new Error("Bad setup");
  } catch(err) {
    reject('Error during setup: ${'err'}');
  }
  return;
}

function determineParity(value) {
  const isOdd = value % 2 ? true : false ;
  const parityInfo = { theNumber: value, isOdd: isOdd };
  return parityInfo;
}

function troubleWithGetNumber(reason) {
  console.error('Trouble getting number: ${'reason'}');
  throw -999; // must "throw" something, to maintain error state down the chain
}

function promiseGetWord(parityInfo) {
  // The "tetheredGetWord()" function gets "parityInfo" as closure variable.
  const tetheredGetWord = function(resolve,reject) {
    const theNumber = parityInfo.theNumber;
    const threshold_B = THRESHOLD_A - 1;
    if(theNumber >= threshold_B) {
      reject('Still too large: ${'theNumber'}');
    } else {
      parityInfo.wordEvenOdd = parityInfo.isOdd ? 'odd' : 'even';
      resolve(parityInfo);
    }
    return;
  }
  return new Promise(tetheredGetWord);
}

(new Promise(tetheredGetNumber))
  .then(determineParity,troubleWithGetNumber)
  .then(promiseGetWord)
  .then((info) => {
    console.log("Got: ",info.theNumber," , ", info.wordEvenOdd);
    return info;
  })
  .catch((reason) => {
    if(reason === -999) {
      console.error("Had previously handled error");
    }
    else {
      console.error('Trouble with promiseGetWord(): ${'reason'}');
    }
   })
  .finally((info) => console.log("All done"));
`.trim();

        
    return (
        <div>
        <SyntaxHighlighter language="javascript" style={docco}>
            {code}
        </SyntaxHighlighter>

        </div>
    )
}
