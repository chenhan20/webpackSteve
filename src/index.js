import _ from 'lodash';
import './style.css';
import Icon from './703.jpg';

  function component() {
    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
  }

  function component1() {
    let element = document.createElement('div');

    element.innerHTML = _.join(['Steve', 'CHUANG'], ' ');
    element.classList.add('hello');


    // Add the image to our existing div.
    var myIcon = new Image();
    myIcon.src = Icon;
  
    element.appendChild(myIcon);

    return element;
  }

  document.body.appendChild(component());
  document.body.appendChild(component1());