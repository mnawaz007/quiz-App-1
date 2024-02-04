/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
 import {useState} from 'react'
 import {motion} from 'framer-motion';
export default function Header(props) {
    let [questionindex, setQuestionIndex] = useState(null);

   // func for start of Quiz
   const startQuiz = () => {
    setQuestionIndex(0);
}
    const {onShowAdmin} = props;
  
     return (
      <motion.div 
       initial = {{x : '100vw'}}
    animate = {{x : 0}}
    transition={{delay : 0.5 , type : 'spring' , stiffness : 100}}
      className="container bg-success my-3">  
      
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
    <div 
   
    className="container-fluid">
    <motion.button whileHover={{scale : 1.5}} className="btn btn-primary my-3 mx-auto"onClick={() => onShowAdmin(true)} > Admin Pannel </motion.button> 
      <motion.button  whileHover={{scale : 1.5}}  className="btn btn-primary my-3 mx-auto" onClick={() => onShowAdmin(false)} > show Quiz </motion.button> 
      
     
    </div>
  </nav>
      </motion.div>
    )
  }