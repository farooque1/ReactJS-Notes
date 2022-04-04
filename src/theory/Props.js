import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function props(props) {

    const code= `import React from 'react'

    function Props(props) {
    return (
        <div>
        <h1>{props.name}</h1>
        <h1>{props.desc}</h1>
        <h1>{props.number}</h1>
        <h1>{props.address}</h1>
        <h1>{props.DOB}</h1>
        <h1>{props.etc}</h1>
        </div>

        App.js
        import React from 'react';
        import Props from './Props';

        <Props name="xyz" desc="test" number="xyz" address="xyz" DOB="xyz" etc="xyz" />

    )
}
export default Props;`.trim();

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
