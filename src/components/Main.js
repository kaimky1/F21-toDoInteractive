import React, { useState, useEffect } from "react";

import ListDisplay from "./ListDisplay";
import { useFormik } from "formik";
const axios = require('axios')

const Main = () => {
  const [task, setTask] = useState("");
  const [allCategories, setAllCategories] = useState([]);
  const [list, setList] = useState([]);

//   const handleChange = (e) => {
//     setTask(e.target.value);
//   };
//   console.log(task);
//   console.log(category);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setList([...list, { task: task, category: category }]);
//     setTask("");
//   };
  
  useEffect(() => {
    axios.get('http://localhost:4000/api/getCategories')
    .then((res) => setAllCategories(res.data))
    axios.get('http://localhost:4000/api/getCategories')
    .then((res) => setList(res.data))
  }, [])

  const catOptions = allCategories.map((cat, index) => {
      return <option value={cat.catgeory_id}>{cat.title}</option>
  })

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      category: null,
    },
    onSubmit: (values) => {
        axios.post('http://localhost:4000/api/addTask', values)
        .then((res) => console.log(res.data))
      console.log(values);
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Task"
          onChange={formik.handleChange}
          value={formik.values.name}
        ></input>
        <input
          name="description"
          type="text"
          placeholder=" Describe your Task"
          onChange={formik.handleChange}
          value={formik.values.description}
        ></input>
        <select name="category" value={formik.values.category} onChange={formik.handleChange}>
          <option defaultValue disabled selected>
            Category
          </option>
          {catOptions}
          {/* <option value="Chores">Chores</option>
          <option value="Errands">Errands</option>
          <option value="Work">Work</option> */}
        </select>
        <button type="submit">Add</button>
      </form>
      <ListDisplay list={list} setList={setList}></ListDisplay>
    </div>
  );
};

export default Main;
