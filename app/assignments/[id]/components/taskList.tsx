"use client"

import { useEffect, useState } from "react"
import Task from "./task"

interface tasklistProps {
  data: any
  num: number
}

export default function TaskList(props: tasklistProps) {
  const [answers, setAnswers] = useState<any>([])

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      let savedValue: string =
        window.localStorage.getItem("answers" + props.num) || "[]"
      setAnswers(JSON.parse(savedValue))
    }
  }, [])

  const updateAnswer = (id: number, answer: string) => {
    let temp = answers
    temp[id] = answer
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("answers" + props.num, JSON.stringify(temp))
    }
    setAnswers(temp)
  }

  const handleFinish = () => {
    // console.log("finish")
    console.log(answers)
  }

  return (
    <div>
      {props.data.map((item: any, index: number) => {
        item.num = index
        return (
          <Task
            key={index}
            data={item}
            answer={answers[index] ? answers[index] : ""}
            update={updateAnswer}
          />
        )
      })}
      <button
        className='border-2 m-2 pl-2 pr-2 rounded-xl'
        onClick={handleFinish}
      >
        Aflever
      </button>
    </div>
  )
}
