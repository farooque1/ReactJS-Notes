import React from 'react';
import './bootstrap.css';
import './bootstrap.min.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Topic from './topic/Topic';
import Scroll from './topic/Scroll';
import Funcmp from './topic/Funcmp';
import Theory from './theory/Theory';

function App() {  
  const codeString = `import {DomSanitizer} from '@angular/platform-browser';
  import {Pipe, PipeTransform} from '@angular/core';
  
  import { icons } from 'feather-icons'; // v4+
  
  @Pipe({ name: 'feather' })          ,
  export class FeatherIconsPipe implements PipeTransform {
  
    constructor(private sanitizer: DomSanitizer) {}
  
    transform(icon: string, size: number = 24, color: string = 'inherit') {
      return this.sanitizer.bypassSecurityTrustHtml(icons[icon].toSvg({
        width: size,
        height: size,
        color: color
      }));
    }
  }`.trim();

return <>
        <section class="bg-gradient pt-5 pb-6">
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex flex-row align-items-center justify-content-between">
                <div class="heading-brand">React JS</div>
                <a href="https://prismjs.com/" class="btn btn-dark">Download</a>
            </div>
        </div>
        <div class="row mt-6">
            <div class="col-md-8 mx-auto text-center">
                <h1>My Personal React JS Notes</h1>
                <p class="lead mb-5">Prism is a lightweight, extensible syntax highlighter, built with modern web
                    standards in mind. It’s used in thousands of websites, including some of those you visit daily.</p>
                <a href="https://github.com/LeaVerou/prism/" class="btn btn-success svg-icon">
                    <em class="mr-2" data-feather="github"></em>
                    Read More
                </a>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-md-9 mx-auto">
                <div class="code-window">
                    <div class="dots">
                        <div class="red"></div>
                        <div class="orange"></div>
                        <div class="green"></div>
                    </div>
                    <pre class="language-javascript line-numbers"><code class="language-javascript">
                    <SyntaxHighlighter language="javascript" style={docco}>
                    {codeString}
                    </SyntaxHighlighter>
                    </code></pre>


                </div>
            </div>
        </div>
    </div>
</section>

<div>

<Topic name="React JS Program and Basic Use" />

<Theory name="Theory Or Notes " />

{/* <Topic name="Javascript ES6" /> */}

<Scroll />
<Funcmp />
<Scroll />

</div>
  

<footer class="py-5 bg-light">
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <ul class="list-inline">
                    <li class="list-inline-item"><a href="https://prismjs.com/test.html">Test Drive</a></li>
                    <li class="list-inline-item"><a href="https://prismjs.com/extending.html">API Docs</a></li>
                    <li class="list-inline-item"><a href="https://github.com/LeaVerou/prism/">Fork Prism.js on GitHub</a></li>
                </ul>
            </div>
        </div>
        <div class="row my-2">
            <div class="col-md-4 mx-auto text-muted text-center small-xl">
                &copy; 2019 Prism - All Rights Reserved
            </div>
        </div>
    </div>
</footer>

  </>;
}
export default App;
