"use client"

import { useState } from "react"

export default function Task({ data }: any) {
  const [correct, setCorrect] = useState<string>("")
  const [answer, setAnswer] = useState<string>("")

  const handleCheck = () => {
    let temp: boolean = false

    data.correct.forEach((str: string) => {
      if (str === answer) temp = true
    })

    if (temp) setCorrect("true")
    else setCorrect("false")
  }

  return (
    <div className='border-2 p-2 m-2'>
      <div>{data.body}</div>

      <div className='p-2'>
        {data.type && data.type === "math" && (
          <input
            type='text'
            className='border-2'
            placeholder='math'
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        )}
        {data.type && data.type === "text" && (
          <input
            type='text'
            className='border-2'
            placeholder='text'
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        )}
        {correct &&
          correct !== "" &&
          (correct === "true" ? <span>Rigtigt</span> : <span>Forkert</span>)}
        <button className='border-2 ml-4 pl-4 pr-4' onClick={handleCheck}>
          Tjek
        </button>
      </div>
    </div>
  )
}
