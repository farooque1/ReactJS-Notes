import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


export default function Clscmp() {

    const code= `import React, { Component } from 'react'
    "rcc" short cut for class component
    export default class classtest extends Component {
        constructor(props) { "rconst" short cut for constracter create 
            super(props)
        
            this.state = {
                 
            }
        }
        
        render() {
            return (
                <div>
                    
                </div>
            )
        }
    }
    `.trim();
    
    return (
        <div>
            <SyntaxHighlighter language="javascript" style={docco}>
            {code}
            </SyntaxHighlighter>
        </div>
    )
}