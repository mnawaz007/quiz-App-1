/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import {useState } from 'react';
import {motion} from 'framer-motion'
export default function AdminPannel(props){
  const {questions   , onDelete} = props;
   
  return(
        <>
        <h1>Admin Pannel</h1>
          <motion.div 
          initial = {{x : '100vw'}}
          animate = {{x: 0}}
          transition={{delay : 0.5, type:'spring', stiffness: 120}}
          >                
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
      <td><motion.button whileHover={{scale : 1.5}} className="btn btn-danger" onClick = {() =>{onDelete(q.id)}}>Delete</motion.button></td>
      

    </tr> )}
  
    </tbody>
    </table></motion.div>   
        </>
    )
}