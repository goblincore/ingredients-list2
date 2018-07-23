//stateless component/ should have capital letters
'use strict';

import React from 'react';

//named export: have to add curly braces to import
//default export
export default function Ingredient(props){
   console.log(props);
  //return JSX stuff
  return( 
    <div className="ingredients"> 
        <div className="ingredient-name">{props.name}</div>
        <div className="ingredient-quantity">{props.quantity}</div>
    </div>
  //rememember all your tags have to be cloesd, including those like img
  //eg <img src="dog.jpg" />
  //div className instead of class for css classes
  //<label htmlFor="someId"></label>
  );
}

//export foo = 'bar';

