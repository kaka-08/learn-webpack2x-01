import _ from "Lodash";
function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script 
  element.innerHTML = _.join(['Hello', 'webpack','第一次编译'], ' ');

  return element;
}

document.body.appendChild(component());