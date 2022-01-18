import DoneIcon from '@mui/icons-material/Done';
import Button from '@mui/material/Button';
import React from 'react'
import './TodoList.css'

function TodoList() {
    const [input, setInput] = React.useState('');
    const [list, setList] = React.useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        setList(oldlist => setList([...oldlist,input]));
        setInput('');
    }
    const deleteItem = (idx) => {
        let arr = []
        for(let i=0; i < list.length; i++){
            if(idx !== i){
                arr.push(list[i]);
            }
        }
        setList(arr);
    }
    return (
        <div className='d-container'>
            <div className='d-input-container'>
                <form className='todo-form' onSubmit={submitHandler}>
                    <input type='text' placeholder='Enter Todo' 
                    value={input} name='text'
                    className='todo-input' 
                    onChange={e => setInput(e.target.value)} />
                    <button className='todo-btn'>Add Todo</button>
                </form>
                <div style={{display : "flex", flexDirection:"column", justifyContent:"center", alignItems:"center", width : "400px"}}>
                    {list&&list.map((data, idx) => <div style={{display : "flex", alignItems:"center", justifyContent:"space-between"}} key={idx}>
                    <span style={{margin : "1rem"}}>{data}</span>
                    <div style={{margin : "1rem"}} onClick={()=>deleteItem(idx)}><Button><DoneIcon/></Button></div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default TodoList
