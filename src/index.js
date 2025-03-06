import _ from 'lodash';
import './style.css';
import Icon from './images.png';
import printMe from './print.js';


function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button')

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    const myIcon = new Image();
    myIcon.src = Icon;

    btn.innerHTML = 'click me and check console';
    btn.onclick = printMe;

    element.appendChild(myIcon);
    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());
