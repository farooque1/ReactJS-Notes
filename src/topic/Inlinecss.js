import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Inlinecss() {
    
    const code= `<div>
      <h1 style={{color: "red"}}>Hello Style!</h1>
      <p style={{color: "red";font-size:20px;text-algin:center;}}>Add a little style!</p>
      </div>`.trim();

    return (
        <div>
        
        <SyntaxHighlighter language="javascript" style={docco}>
            {code}
        </SyntaxHighlighter>
        
        </div>
    )
}
