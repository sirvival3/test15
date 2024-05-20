"use client"

import { useState } from "react"

interface taskProps {
  data: any
  answer: string
  update: any
}

export default function Task(props: taskProps) {
  const [correct, setCorrect] = useState<string>("")
  const data = props.data

  const handleValidate = () => {
    let temp: boolean = false

    data.correct.forEach((str: string) => {
      if (str === props.answer) temp = true
    })

    if (temp) setCorrect("true")
    else setCorrect("false")
  }
  const updateAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.update(data.num, e.target.value)
  }

  return (
    <div className='border-2 p-2 m-2'>
      <div className='inline-block mr-4'>{data.num + 1}</div>
      <div className='inline-block'>{data.body}</div>

      <div className='p-2'>
        {data.type && data.type === "math" && (
          <input
            type='text'
            className='border-2'
            placeholder='math'
            defaultValue={props.answer}
            onChange={updateAnswer}
          />
        )}
        {data.type && data.type === "text" && (
          <input
            type='text'
            className='border-2'
            placeholder='text'
            defaultValue={props.answer}
            onChange={updateAnswer}
          />
        )}
        {correct &&
          correct !== "" &&
          (correct === "true" ? <span>Rigtigt</span> : <span>Forkert</span>)}
        <button
          className='border-2 ml-4 pl-4 pr-4 rounded-xl'
          onClick={handleValidate}
        >
          Tjek
        </button>
      </div>
    </div>
  )
}
