"use client"

import { useEffect, useState } from "react"
import { useTaskContext } from "./taskContext"

interface taskProps {
  id: number
}

export default function Task(props: taskProps) {
  const { getTask, updateAnswer, validateAnswer } = useTaskContext()
  const data = getTask(props.id)
  const [tries, setTries] = useState(data.answer.tries)
  const [validation, setValidation] = useState(
    data.answer.tries > 0 ? data.answer.tries : null
  )

  // console.log(data.id)

  // useEffect(() => {
  //   setAnswer(props.answer)
  // }, [props.answer])

  const handleValidate = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()

    if (data.answer.answer !== "") {
      validateAnswer(data.id)
      setTries(data.answer.tries)
      setValidation(data.answer.validation)
    }
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateAnswer(data.id, e.target.value)
  }

  return (
    <div className='border-2 p-2 m-2'>
      <div className='inline-block mr-4'>{data.id + 1}</div>
      <div className='inline-block'>{data.body}</div>

      <div className='p-2'>
        {data.type && data.type === "math" && (
          <input
            type='text'
            className='border-2'
            placeholder='math'
            defaultValue={data.answer.answer}
            disabled={validation ? true : false}
            onChange={handleChange}
          />
        )}
        {data.type && data.type === "text" && (
          <input
            type='text'
            className='border-2'
            placeholder='text'
            defaultValue={data.answer.answer}
            disabled={validation ? true : false}
            onChange={handleChange}
          />
        )}
        {validation !== null &&
          (validation ? <span>Rigtigt</span> : <span>Forkert</span>)}
        <button
          className='border-2 ml-4 pl-4 pr-4 rounded-xl'
          onClick={handleValidate}
          disabled={validation ? true : false}
        >
          Tjek {tries !== 0 && `(${tries})`}
        </button>
      </div>
    </div>
  )
}
