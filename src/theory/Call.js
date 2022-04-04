import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


export default function Call() {

    const code= `const userdetails1={
        name:"farooque",
        age:"25",
        address:"mumbai",
        number:"9876541230",
        info:function(){
          console.log(this.name)
        }
      }
      userdetails1.info();
      //function borrowing
      let userdetails3={
        name:"karan",
        age:"26",
        address:"mumbai",
        number:"9999999998  "
      }
      //call
      userdetails1.info.call(userdetails3);
    
      let userdetails4={
        name:"Durgesh kumar",
        age:"27",
        address:"Old Mumbai",
        number:"9856985690",
      }
    
      let infodetails4=function(pincode,state,country,city){
        console.log(this.name+ " " +pincode+" "+state+" "+country+ " " +city );
      }
      //apply
      infodetails4.apply(userdetails4,["400088","Maharasthra","India","Mumbai"]);
    
      let userdetails2={
        name:"Mahesh",
        age:"25",
        address:"navi mumbai",
        number:"9876541870",
      }
    
      let infodetails=function(pincode,state,country){
        console.log(this.name+ " " +pincode+" "+state+" "+country );
      }
      // call
      infodetails.call(userdetails2,"400047","Maharasthra","India");  
    
      //bind function
      let temp=infodetails4.bind(userdetails4,"400047","Maharasthra","India");
      temp();
      console.log(temp);
    
      let temp2=infodetails.bind(userdetails2,"400047","Maharasthra");
      temp2();
      console.log(temp2);`.trim();

    return (
        <div>

            <SyntaxHighlighter language="javascript" style={docco}>
            {code}
            </SyntaxHighlighter>
            
        </div>
    )
}
