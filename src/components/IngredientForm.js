import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addIngredients} from '../store'

const IngredientForm = () => {
    const [ingredient, setIngredient] = useState({
        name: '',
        amount:''
    })
    const dispatch = useDispatch();
    const submitIngredient = (event) => {
        event.preventDefault();
        console.log(ingredient)
        dispatch(addIngredients(ingredient));
    }
    const handleChange = (event) => {
        setIngredient(ingredient[event.target.name] = event.target.value)
    }
    return (
        <form onSubmit ={(e)=>submitIngredient(e)}>
            <div> 
                <label>
                    Name: 
                    <input
                        className="form-control"
                        onChange = {handleChange}
                        name ="name"
                        value={ingredient.name}
                    />
                </label>
            </div>
            <div>
                <label>
                    Amount: 
                    <input
                        onChange = {handleChange}
                        name = "amount"
                        value={ingredient.amount}
                    />
                </label>
            </div>
            <button type ="submit">Add an Ingredient</button>
        </form>
    )
}

export default IngredientForm