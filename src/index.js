import _ from 'lodash'; // eslint-disable-line
import './style.css';
import { getAllLikes } from './modules/homepage/likes.js';
import { fetchList } from './modules/homepage/homepage.js';

fetchList(10);
getAllLikes(9);
