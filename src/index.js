import _ from 'lodash';

  function component() {
    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
  }

  function component1() {
    let element = document.createElement('div');

    element.innerHTML = _.join(['QQQQQ', 'SSSSSS'], ' ');

    return element;
  }

  
  alert(123123123);
  document.body.appendChild(component());
  document.body.appendChild(component1());