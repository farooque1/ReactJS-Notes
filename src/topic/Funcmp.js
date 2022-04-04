import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Funcmp() {
        
    const code= ` Code 
    import React from 'react'
        "rcf" short cut for Function Component
    function Funcmp() {
        return (
            <div>
                text or content
            </div>
        )
    }
    export default Funcmp;`.trim();

    const theory= `Notes
    Function Components and Props
    Components let you split the UI into independent, reusable pieces,
     and think about each piece in isolation. This page provides an 
     introduction to the idea of components. You can find a detailed component API reference here.
    
    Conceptually, components are like JavaScript functions.
     They accept arbitrary inputs (called “props”) and return React elements describing 
     what should appear on the screen.
     `.trim();
    
    return (
        <>
        <div style={{height: 500}}>
            <section id="code">
            <SyntaxHighlighter language="javascript" style={docco}>
            {code}
            </SyntaxHighlighter>
            </section>
            </div>
            <div style={{height: 500}}>
            <section id="notes">
            <SyntaxHighlighter language="javascript" style={docco}>
            {theory}
            </SyntaxHighlighter>
            </section>
            </div>
        </>
    )
}
