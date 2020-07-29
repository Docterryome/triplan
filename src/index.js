import _ from 'lodash';
import './styles/main.scss';

function component(){
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack', "Cool", "Beans"], ' mofo ');

    element.classList.add('hello');
    return element;
}

document.body.appendChild(component());