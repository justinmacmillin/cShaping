import { createElement } from 'lwc';
import MyApp from 'my/app';

const app = createElement('my-app', { is: MyApp });
// eslint-disable-next-line @lwc/lwc/no-document-query
document.querySelector('#main').appendChild(app);

// clicking multiple times does nothing
// must click all squares to animate

// app
// keep track of squares and their ordering
// layout

// square cmp
// id
// click handler
// isEnabled
// animate()