import _ from 'lodash';
import './style.css';

  function component() {
    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
  }

  function component1() {
    let element = document.createElement('div');

    element.innerHTML = _.join(['QQQQQ', 'SSSSSS'], ' ');
    element.classList.add('hello');
    return element;
  }

  document.body.appendChild(component());
  document.body.appendChild(component1());