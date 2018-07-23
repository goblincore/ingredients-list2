//stateful component
'use strict';

import React from 'react';
//importi ngredint compoinent render as child
import Ingredient from './ingredient';


export default class IngredientList extends React.Component { 
 
    constructor(props){
        super(props);

        this.state = {
            ingredients:
            [
                { name : "Banana" , quantity : "3", id: 0},
                {name : "Chocolate sauce", quantity: "5 tpsp", id: 4},
                {name: "Sprinkles", quantity: "loads", id : 10},
                {name: 'whipped cream', quantity: '1 squirt', id: 19}
            ]
        };
    }

    render (){
   
    // const ingredientData= [
    //     { name : "Banana" , quantity : "3", id: 0},
    //     {name : "Chocolate sauce", quantity: "5 tpsp", id: 4},
    //     {name: "Sprinkles", quantity: "loads", id : 10},
    //     {name: 'whipped cream', quantity: '1 squirt', id: 19}
    // ];

    //map over our structured data

    const ingredients = this.state.ingredientData.map( ingredient => (
    <Ingredient 
       name={ingredient.name} 
       quantity={ingredient.quantity}
       key={ingredient.id}
       />
    ));

    return(
        <div className = "ingredient-list">
            {ingredients}
        </div>
    );
    }
}