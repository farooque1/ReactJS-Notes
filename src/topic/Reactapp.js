import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Reactapp() {
    
    const codeString = `1- React Install Command
    
    npm create-react-app my-app
    OR
    npx create-react-app my-app
    cd my-app
    npm start
    
    2- Install React DOM For routeing
    
    npm i react-router-dom // latest version install 6 or more ...
    npm i react-router-dom@5.2.0// No issue this version.

    3-React Syntax Highlighter

    npm i react-syntax-highlighter
     
    `.trim();

    return (
        <div>                    
                    <SyntaxHighlighter language="javascript" style={docco}>
                    {codeString}
                    </SyntaxHighlighter>
        </div>
    )
}
