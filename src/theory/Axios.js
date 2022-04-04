import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


export default function Axios() {
    
    const code= `import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.persons
            .map(person =>
              <li key={person.id}>{person.name}</li>
            )
        }
      </ul>
    )
  }
}

    fetch('/', {
        // configuration
     })
     .then(response => response.json())
     .then(response => {
         // do something with data
     })

     axios({
        url: '/',
        // configuration
    })
    .then(response => {
       // do something with JSON response data
    })`.trim();

    return (
        <div>
        <SyntaxHighlighter language="javascript" style={docco}>
            {code}
        </SyntaxHighlighter>

        </div>
    )
}
