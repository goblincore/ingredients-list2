//es6 style imports
'require strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//named export
//import {Ingredient, foo}
//default export
import Ingredient from './ingredient';
import IngredientList from './ingredient-list';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<IngredientList />, document.getElementById('root'));
registerServiceWorker();
