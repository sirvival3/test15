"use client"

import { useEffect } from "react"
import Task from "./task"
import { useTaskContext } from "./taskContext"

interface tasklistProps {
  data: any
}

export default function TaskList(props: tasklistProps) {
  const { tasks, InitTasks } = useTaskContext()
  // console.log(props.data)
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      // console.log(props.data.tasks)
      // setTasks(JSON.parse(props.data.tasks))

      let savedValue: string | null = window.localStorage.getItem(
        "xxx" + props.data.id
      )
      // if (savedValue) console.log(savedValue)
      // if(savedValue)

      if (savedValue) InitTasks(props.data.id, JSON.parse(savedValue))
      else InitTasks(props.data.id, JSON.parse(props.data.tasks))
      // // let savedValue: string = window.localStorage.getItem(storageName) || "[]"
      // let savedValue: string =
      //   window.localStorage.getItem(storageName) ||
      //   JSON.stringify(
      //     tasks.map(() => {
      //       return ""
      //     })
      //   )
      // setAnswers(JSON.parse(savedValue))
    }
  }, [props.data])

  //   if (typeof window !== "undefined" && window.localStorage) {
  //     localStorage.setItem(storageName, JSON.stringify(temp))
  //   }

  const handleSubmit = () => {
    console.log("Submit")
  }

  return (
    <div>
      {tasks.map((item: any, index: number) => {
        item.id = index
        return <Task key={index} id={index} />
      })}
      <button
        className='border-2 m-2 pl-2 pr-2 rounded-xl'
        onClick={handleSubmit}
      >
        Aflever
      </button>
    </div>
  )
}
