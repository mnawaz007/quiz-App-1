/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import {useState } from 'react';
export default function AdminPannel(props){
  const {questions, onDelete} = props;
   
  return(
        <>
        <h1>Admin Pannel</h1>
                           
        <table className="table table-hover table-striped">
  <thead>
    <tr>
      <th scope="col">Q.num</th>
      <th scope="col">Statement</th>
      <th scope="col">Options</th>
      <th scope="col">Correct Answer</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
        {questions.map((q) =>  <tr key={q.statement}>
      <th >{q.id}</th>
      <td>{q.statement}</td>
      <td>{q.options.join("**")}</td>
      <td>{q.correctAnswerArr +1}</td>
      <td><button className="btn btn-danger" onClick = {() =>{onDelete(q.id)}}>Delete</button></td>
      {/* <td><button className="btn btn-primary">Edit</button></td> */}

    </tr> )}
  
    </tbody>
    </table>
        </>
    )
}