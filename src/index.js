import 'babel-core/polyfill';

import React from 'react';
import { render } from 'react-dom';

import './styles/style.scss';

import Root from './components/root';

render(<Root />, document.getElementById('main'))