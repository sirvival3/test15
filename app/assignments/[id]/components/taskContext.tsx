"use client"

import { createContext, useContext, useEffect, useState } from "react"

type TaskContextProviderProps = {
  children: React.ReactNode
}

type answer = {
  answer: string
  validation: boolean
  tries: number
}

type task = {
  body: string
  type: string
  answer: answer
  correct_answers: string[]
}

type TaskContext = {
  tasks: task[]
  setTasks: React.Dispatch<React.SetStateAction<task[]>>
  InitTasks: (id: number, tasks: task[]) => void
  getTask: (id: number) => any
  updateAnswer: (id: number, answer: string) => void
  validateAnswer: (id: number) => void
  // updateLocalstorage: () => void
}

export const TaskContext = createContext<TaskContext | null>(null)

export default function TaskProvider({ children }: TaskContextProviderProps) {
  const [id, setId] = useState<number | null>(null)
  const [tasks, setTasks] = useState<task[]>([])

  // useEffect(() => {
  //   if (
  //     id !== null &&
  //     tasks &&
  //     typeof window !== "undefined" &&
  //     window.localStorage
  //   ) {
  //     localStorage.setItem("xxx" + id, JSON.stringify(tasks))
  //     // console.log(window.localStorage.getItem("xxx" + id))
  //   }
  // }, [tasks, setTasks])

  const updateLocalstorage = () => {
    if (
      id !== null &&
      tasks &&
      typeof window !== "undefined" &&
      window.localStorage
    ) {
      localStorage.setItem("xxx" + id, JSON.stringify(tasks))
      // console.log(window.localStorage.getItem("xxx" + id))
    }
    return
  }

  const InitTasks = (id: number, tasks: task[]) => {
    setId(id)
    setTasks(tasks)
    updateLocalstorage()
    return
  }

  const getTask = (id: number) => {
    return tasks[id]
  }

  const updateAnswer = (id: number, answer: string) => {
    let temp: task[] = tasks
    temp[id].answer.answer = answer
    setTasks(temp)
    updateLocalstorage()
    return
  }

  const validateAnswer = (id: number) => {
    let temp: task[] = tasks
    if (temp[id].answer.answer !== "") {
      temp[id].answer.tries += 1

      let temp2: boolean = false
      temp[id].correct_answers.forEach((item: string) => {
        if (temp[id].answer.answer === item) temp2 = true
      })

      temp[id].answer.validation = temp2
    }

    setTasks(temp)
    updateLocalstorage()
    return
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        InitTasks,
        setTasks,
        getTask,
        updateAnswer,
        validateAnswer,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export function useTaskContext() {
  const context = useContext(TaskContext)
  if (context === null) {
    throw new Error("useTaskContext must be used within a TaskContextProvider")
  }
  return context
}
