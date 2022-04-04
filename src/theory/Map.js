import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


export default function Map() {

    const code= `

    const numbers=props.numbers;
  const items=numbers.map((number)=>
 
     <li>{number}</li>
    console.log(items)

    App.js
    
    const numbers = ['farooque','farooq','farukh','faruk'];
    
    import React, { Component } from 'react'

class getdata extends Component {

    constructor(props) {
        super(props);
        this.state = {
          items: [],
          isLoaded: false,
        };
      }
    
      componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/photos')
          .then(res => res.json())
          .then(result => {
            this.setState({
              isLoaded: true,
              items: result
            });
            console.log(result)
          });
      }
      render() {
          const {items} = this.state;
          return (
            <div>
            
            <table class="container table table-bordered mt-5 mb-5">
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
              {items.map(item => (
                <tr>
                <td key={item.id}>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                  <td><img src={item.thumbnailUrl} /></td>
              </tr>
              ))}
            </table>
            </div>
          );  
      }
    }

export default getdata; `.trim();

    return (
        <div>
            <SyntaxHighlighter language="javascript" style={docco}>
            {code}
            </SyntaxHighlighter>

        </div>
    )
}
