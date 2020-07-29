import _ from 'lodash';

function component(){
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack', "Cool", "Beans"], ' mofo ');

    return element;
}

document.body.appendChild(component());