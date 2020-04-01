import React from 'react'

const Recipes = ({recipe}) => {
    return (
        <>
            <div key ={recipe.name}>
                <h4>{recipe.name}</h4>
            </div>
        </>
    )
}

export default Recipes