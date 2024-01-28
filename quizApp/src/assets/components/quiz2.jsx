import { useState } from 'react';
import { Questions } from './data'
import './quiz2.css'
export default function Quiz2() {
    //use state for question selection..
    const [currentQuestion, setCurrentQuestion] = useState(0);
    //use state for navigation..
    let [questionindex, setQuestionIndex] = useState(null);
    // for question num increment
    let [questionnum, setQuestionNum] = useState(1)
    // for Score ...
    const [score, setScore] = useState(0);
    //for del Question..
    //   const [delQuestion, setDelQuestion] = useState({Questions})



    // fun for next question and increment in question num
    const nextQuestion = () => {

        setCurrentQuestion(currentQuestion + 1);
        setQuestionNum(questionnum + 1);

    }

    // fun for previous question and decrement in question num
    const previousQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
            setQuestionNum(questionnum - 1);
        }
    }

    // score addition function...
    const updateScore = (value) => {
        if (value === Questions[currentQuestion].correctAnswerArr) {
            setScore(score + 1);

        }

    }


    // fun for star for Quiz
    const startQuiz = () => {
        setQuestionIndex(0);
    }
    // Well come Screen..
    if (questionindex === null) {
        return (
            <div className="container bg-warning  text-center w.come mt-5">
                <h1 className="text-center mt-5">Well Come To Quiz App</h1>
                <button className="btn btn-primary my-5 mx-auto" onClick={startQuiz} > Start Quiz </button>
                {/* <button className="btn btn-warning my-5 mx-3" onClick={showQuiz} > show Quiz </button>  */}
            </div>
        )
    }
    const reStartQuiz = ()=>{
        setQuestionIndex(null);
        setQuestionNum(1);
        setCurrentQuestion(0);
        setScore(0);
    }
    // at the end of Quiz...
    if (currentQuestion === Questions.length) {
        return (
            <div className="container text-center bg-warning">
                <h1 className="text-center">Quiz Finished</h1>
                <h3 className="text-center"> You Scored : {score} Out of  {Questions.length}     </h3>
                <button className="btn btn-primary  my-3" onClick={reStartQuiz}>retry Quiz</button>

            </div>
        )
    }

    // const delet = (val) => {
    //     //delete current Question

    //         let index = Questions.filter(q => q.id !== val.id)
    //         setDelQuestion({ index})


    // }

    return (
        <>
            <div className="container bg-success main ">
                <h1 className='text-center d-1'>Quiz App </h1>
                <h3 className=' d-1'>Question no.{questionnum}/ {Questions.length} </h3>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3 className=" mt-4">{Questions[currentQuestion]?.statement} </h3>

                            <ul className="list-unstyled mt-5">
                                {Questions[currentQuestion]?.options.map((option, index) => {
                                    return (
                                        <li key={index} className='mt-1' onClick={() => updateScore(index)} >
                                            <input type="radio" name="options" value={option} />
                                            {option}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container col d-flex justify-content-around mt-5">

                    <button className='btn btn-sm btn-primary' onClick={nextQuestion} >Next</button>
                    <button className='btn btn-sm btn-primary' onClick={previousQuestion} disabled={currentQuestion === 0}>Previous</button>

                    <button className='btn btn-sm btn-primary'>Add  </button>
                    <button className='btn btn-sm btn-danger'>Delete </button>
                </div>
            </div>
        </>
    )
}