import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function State(props) {

    const code= `import React, { Component } from 'react'

    export default class State extends Component {
        
        constructor(props) {
            super(props)
        
            this.state = {
                 
            }
        }    
    
        render() {
            return (
                <div>
                
                <h2>{this.props.name}</h2>
                <p>{this.props.desc}</p>  

                </div>
            )
        }
    }
    

        App.js
        import React from 'react';
        import State from './Props';

        <Sate name="xyz" desc="test"/>

    )
}
export default State;`.trim();

    return (
        <div>

<SyntaxHighlighter language="javascript" style={docco}>
            {code}
            </SyntaxHighlighter>

            <h1>{props.name}</h1>
            <h1>{props.desc}</h1>
            <h1>{props.number}</h1>
            <h1>{props.address}</h1>
            <h1>{props.DOB}</h1>
            <h1>{props.etc}</h1>
        </div>
    )
}
