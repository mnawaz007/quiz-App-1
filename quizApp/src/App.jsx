import {useState} from 'react'
import  {Questions} from './assets/components/data'
import Quiz2 from './assets/components/quiz2'
import AdminPannel from './assets/components/admin'
import Header from './assets/components/header.jsx'
//**************************************************************** */

function App() {
  // hook for showing admin and home page
  const [admin, setAdmin] =useState(false)
  // state for updating state at question delete..
  const [questions, setQuestions] = useState([...Questions]);
  // addition of new Question..
const[newQuestion, setNewQuestion] = useState({
  id: "" ,
  statement: "" ,
  options : [] ,
  correctAnswerArr : 0
  });
  
  
  
      const Delete = (id) => {
        let del = questions.filter(q => q.id !== id);
        setQuestions(del)
        console.log(del);
    }

const showAdmin = (status) => setAdmin(status)

  return (
    <>
    
     <div className="container my-5 main">
      <div className="row">
      <h1 className="text-center bg-success p-2 ">Quiz App</h1>
      <Header onShowAdmin = {showAdmin} />
      {admin ? ( <AdminPannel questions = {questions} onDelete = {Delete}  />): ( <Quiz2 questions = {questions} />)}
         
     </div>
     </div>
     
    </>
  )
}

export default App
