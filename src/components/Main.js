import React, { useState } from 'react'

import ListDisplay from './ListDisplay'

const Main = () => {
  
    const [task, setTask] = useState('')
    const [category, setCategory] = useState('')
    const [list, setList] = useState([])
  
    const handleChange = (e) => {
        setTask(e.target.value)
    }
    console.log(task)
    console.log(category)
  
    const handleSubmit = (e) => {
        e.preventDefault()
        setList([...list, {task: task, category: category}])
        setTask('')
    }
    console.log("This is the list", list)

    return (
    <div>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" placeholder="Task" onChange={handleChange} value={task}></input>
            <select onChange={(e) => setCategory(e.target.value)}>
                <option defaultValue disabled selected>Category</option>
                <option value='Chores'>Chores</option>
                <option value='Errands'>Errands</option>
                <option value='Work'>Work</option>
            </select>
            <button type="submit">Add</button>
        </form> 
        <ListDisplay list={list} setList={setList}></ListDisplay>
    </div>
  )
}

export default Main