import React from 'react'
import RecipeNameForm from './RecipeNameForm'
import {useSelector} from 'react-redux'
import Recipes from './Recipes'
import IngredientForm from './IngredientForm'

const Root = () => {
    const recipe = useSelector(state => state)
    return (
        <div>
            <h1>Recipe Scaler</h1>
            <h3>Right now this works with one recipe at a time.</h3>
            <Recipes recipe={recipe}/>
            { !recipe.name&&
                <div>
                    <h3>Enter your recipe below</h3>
                    <RecipeNameForm/>
                </div>
            }
            <h3>Add Ingredients Below:</h3>
            <IngredientForm/>
        </div>
    )
}

export default Root
