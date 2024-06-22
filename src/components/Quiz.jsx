import React, { useState } from 'react'
import Question from './Question.jsx'

const questions = [
    {
        Question: "What is the capital of India",
        Options: ["Delhi", "Chandigarh", "Mumbai"],
        Answer: "Delhi"
    } ,
    {
        Question: "What is the capital of Russia",
        Options: ["Chernobyl", "Moscow", "St Petersburg"],
        Answer: "Moscow"
    } ,
    {
        Question: "What is the capital of Japan",
        Options: ["Tokyo", "Kanto", "Hiroshima"],
        Answer: "Tokyo"
    } ,
    {
        Question: "What is the capital of USA",
        Options: ["New York", "Las Vegas", "Washington DC"],
        Answer: "Washington DC"
    } 
]

function Quiz() {
    const[currentQuestion, setCurrentQuestion] = useState(0)
    const[score, setScore] = useState(0)
    const[showScore, setShowScore] = useState(false)

    const buttonClick = (clicked) => {
        if (clicked === questions[currentQuestion].Answer) {
            setScore(score + 1);
        }
        const nextquestion = currentQuestion + 1
        if (nextquestion<questions.length){
            setCurrentQuestion(currentQuestion+1)
        } else {
            setShowScore(true)
        }
    }

  return (
    <div>{showScore?(
        <div>{score}</div>
    ):(
    <Question
         ques = {questions[currentQuestion].Question}
         opt = {questions[currentQuestion].Options}
         onAnswerClick = {buttonClick}
         />

    )
}
</div>
  
  )
}
export default Quiz