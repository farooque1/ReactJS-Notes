import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Async() {
 
    const code= `import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    const response = await fetch('https://api.coinmarketcap.com/v1/ticker/?limit=10');
    const json = await response.json();
    this.setState({ data: json });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.data.map(el => (
            <li>
              {el.name}: {el.price_usd}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));`.trim();

    return (
        <div>
        <SyntaxHighlighter language="javascript" style={docco}>
            {code}
        </SyntaxHighlighter>
        </div>
    )
}
