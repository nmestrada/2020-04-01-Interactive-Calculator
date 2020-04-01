import React, {useState} from 'react'
import {addRecipeName} from '../store'
import {useDispatch} from 'react-redux'

const RecipeNameForm = () => {
    const [name , setName] = useState('');
    const dispatch = useDispatch();
    const submitName = (event) => {
        event.preventDefault();
        dispatch(addRecipeName(name));
    }
    const handleName = (event) => {
        setName(event.target.value)
    }
    return (
        <>
        <form onSubmit={(e)=>submitName(e)}>
            <div className="form-group">
            <label htmlFor='name'>
                    Recipe Name:
                <input
                    className="form-control"
                    onChange= {handleName}
                    type='text'
                    name='name'
                    value = {name}
                />
            </label>
            </div>
            <button
                type="submit"
                className="btn btn-primary"
                >Enter
            </button>
        </form>  
        </>
    )
}

export default RecipeNameForm