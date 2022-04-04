import React from 'react'
import {Link} from 'react-scroll';
import Funcmp from './Funcmp';

export default function Scroll() {
    return (
        <div>
             
            <ul style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}>
          <li><Link activeClass="active" to="code" spy={true} smooth={true}>Code</Link></li>
          <li><Link  to="notes" spy={true} smooth={true}>Notes</Link></li>
            </ul>

        </div>
    )
}
