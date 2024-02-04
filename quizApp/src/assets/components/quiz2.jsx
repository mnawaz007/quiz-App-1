/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './quiz2.css'
import {motion} from 'framer-motion';

//************ */
export default function Quiz2(props) {
    const Questions = props.questions;
    
    //use state for question selection..
    const [currentQuestion, setCurrentQuestion] = useState(0);
    //use state for navigation..
    let [questionindex, setQuestionIndex] = useState(null);
    // for question num increment
    let [questionnum, setQuestionNum] = useState(1)
    // for Score ...
    const [score, setScore] = useState(0);
    //for del Question..
    const [delquestion, setDelQuestion] = useState([...Questions])
    // background...
    const [background, setBackground] = useState ('');
    // option selected...
    const [selectedOption, setSelectedOption] = useState(null);
    


    // fun for next question and increment in question num
    const nextQuestion = () => {

        setCurrentQuestion(currentQuestion + 1);
        setQuestionNum(questionnum + 1);
        setSelectedOption(null); 

    }

    // fun for previous question and decrement in question num
    const previousQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
            setQuestionNum(questionnum - 1);
            setSelectedOption(null); 
            

        }
    }

    // score addition function...
    const updateScore = (value) => {
        if (value === Questions[currentQuestion].correctAnswerArr) {
            setScore(score + 1);
            setBackground('red');
            setSelectedOption(value);
        }
    }
   

    // func for start of Quiz
    const startQuiz = () => {
        setQuestionIndex(0);
    }

    // Well come Screen..
    if (questionindex === null) {
        return (
            <motion.div 
            initial = {{x : '-100vw'}}
            animate = {{x : 0}}
            transition={{delay: 0.5, type: 'spring', stiffness: 130}}
            className="container   text-center w.come bg-success mt-3">
                <h1 className="text-center mt-5"> To Start your  Quiz press Start Button</h1>
                <motion.button whileHover={{scale : 1.5}} className="btn btn-primary my-5 mx-auto" onClick={startQuiz} > Start Quiz </motion.button>
               
            </motion.div>
        )
    }
    const reStartQuiz = () => {

        // setQuestionIndex(null);
        setQuestionNum(1);
        setCurrentQuestion(0);
        setScore(0);
    }


    // at the end of Quiz...
    if (currentQuestion === Questions.length) {
        return (
            <motion.div 
            initial = {{x : '-100vw'}}
            animate = {{x : 0}}
            transition={{delay: 1, type: 'fade'}}
            
            className="container text-center bg-warning">
                <h1 className="text-center">Quiz Finished</h1>
                <h3 className="text-center"> You Scored : {score} Out of  {Questions.length}     </h3>
                <motion.button whileHover={{scale : 1.4}} className="btn btn-primary  my-3" onClick={reStartQuiz}>retry Quiz</motion.button>

            </motion.div>
        )
    }

    const delet = (val) => {
        //delete current Question

        let index = Questions.filter(q => q.id !== val.id)
        setDelQuestion(index)
        nextQuestion()

    }

    return (
        <>
            <div className="container bg-success main ">
                <h1 className='text-center d-1'>Quiz App </h1>
                <h3 className=' d-1'>Question no.{questionnum}/ {Questions.length} </h3>

                <motion.div 
                initial = {{x : '-100vw'}}
                            animate = {{x : 0}}
                            transition={{delay: 1 , type: 'fade'}} className="container ">
                    <div className="row">
                        <div className="col">
                            <h3
                            
                            className=" mt-4 color-danger">{delquestion[currentQuestion]?.statement} </h3>

                            <ul className="list-unstyled mt-5 ">
                                {delquestion[currentQuestion]?.options.map((option, index) => {
                                    return (
                                        <li id='list' key={index} className='mt-1 d-5' onClick={() => updateScore(index)}  >
                                             <input type="radio" className='mx-3' name="options" value={option} />
                                           
                                            {option}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </motion.div>

                <div className="container col d-flex justify-content-around mt-5">

                    <motion.button 
                    whileHover={{scale:1.5}}
                    className='btn btn-sm btn-primary' onClick={nextQuestion} >Next</motion.button>
                    <motion.button  whileHover={{scale:1.5}} className='btn btn-sm btn-primary' onClick={previousQuestion} disabled={currentQuestion === 0}>Previous</motion.button>

                   
                </div>
            </div>




        </>
    )
}