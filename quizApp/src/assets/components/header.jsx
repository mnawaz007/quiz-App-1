/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
 import {useState} from 'react'
export default function Header(props) {
    let [questionindex, setQuestionIndex] = useState(null);

   // func for start of Quiz
   const startQuiz = () => {
    setQuestionIndex(0);
}
    const {onShowAdmin} = props;
  
     return (
      <div className="container bg-success my-3">  
      
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
    <div className="container-fluid">
    <button className="btn btn-primary my-3 mx-auto"onClick={() => onShowAdmin(true)} > Admin Pannel </button> 
      <button className="btn btn-primary my-3 mx-auto" onClick={() => onShowAdmin(false)} > show Quiz </button> 
      
     
    </div>
  </nav>
      </div>
    )
  }