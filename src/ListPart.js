import List from './List';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
const ListPart = ({ children,actions,value}) => {
    const [inputValue,setInputValue] = useState('');
    const dispatch = useDispatch();
    const handleChange = (e) =>{
        setInputValue(()=>e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        setInputValue('');
        dispatch(actions[0](inputValue));
    }
    return (
        <div>
            <div>{children}</div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value = {inputValue}/>
                <button>Submit</button>
            </form>
            <List value={value}/>
        </div>
    )
}

export default ListPart;