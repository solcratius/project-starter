// UserAgent.init();
// WinResize.init();

import './test.scss';
import React from 'react';
import { render } from 'react-dom';
import App from './App';

const Testing1 = () => 'testing.',
  Testing2 = user => `${user} is testing.`,
  Testing3 = (user, addr) => `${user} from ${addr} is testing.`;

console.log(Testing1());
console.log(Testing2('James'));
console.log(Testing3('James', 'Great Neck'));

render(<App name="James" />, document.getElementById('root'));
