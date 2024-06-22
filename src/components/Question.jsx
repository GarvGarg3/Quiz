import React from 'react'

function Question({ques, opt, onAnswerClick}) {
  return (
    <div>
        <div>
            <h1>{ques}</h1>
            {opt.map((option, index)=>(
                <button key={index} onClick={() => onAnswerClick(option)}>{option}</button>
            ))}
        </div>
    </div>
  )
}

export default Question